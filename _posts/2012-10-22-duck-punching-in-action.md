---
layout: post
title: "duck punching, in action"
date: 2012-10-22 07:49:20
tags: ["ruby", "dns"]
---

Following up on last post, this post is about a monkey patch I wrote to get a
little more functionality out of one of Ruby's standard libraries, `Resolv`.

`Resolv` is a DNS stub resolver library written in Ruby that provides the
ability to perform non-blocking DNS requests, but it doesn't expose any sort of
access to the raw DNS records returned, at least that I could tell. 

So, after tracing the code, I found that copying an existing function,
modifying it very slightly, and patching it in was the easiest way to get in:

```ruby
require 'resolv'

class Resolv::DNS
  def query(name, typeclass)
    lazy_initialize
    requester = make_udp_requester
    senders = {}
    begin
      @config.resolv(name) do |candidate, tout, nameserver, port|
        msg = Message.new
        msg.rd = 1
        msg.add_question(candidate, typeclass)
        unless sender = senders[[candidate, nameserver, port]]
          sender = senders[[candidate, nameserver, port]] =
            requester.sender(msg, candidate, nameserver, port)
        end
        reply, reply_name = requester.request(sender, tout)
        if reply.rcode == RCode::NoError
          if reply.tc == 1 and not Requester::TCP === requester
            requester.close
            # Retry via TCP:
            requester = make_tcp_requester(nameserver, port)
            senders = {}
            redo
          end
          return reply end
      end
    ensure
      requester.close
    end
  end
end

dns = Resolv::DNS.new

resp = dns.query("segv.me", Resolv::DNS::Resource::IN::A)

resp.rcode
=> 0

[resp.encode].pack("m*")
=> "XYKBgAABAAEABQAABHNlZ3YCbWUAAAEAAcAMAAEAA..."

```

Of course this certainly isn't as full-featured as `Net::DNS`, the Perl analog,
but it doesn't require a gem as `Resolv` is part of the `stdlib`.

