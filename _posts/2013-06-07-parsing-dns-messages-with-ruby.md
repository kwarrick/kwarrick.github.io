---
layout: post
title: "parsing DNS messages with ruby"
date: 2013-06-07 20:20:28
tags: ["ruby", "dns"]
---

Ruby's core module, `resolv`, will allow you to easily parse raw DNS messages:

```ruby
require 'resolv'

Resolv::DNS::Message.decode("\xE8\x84\x81\x80...")

msg.opcode
# => 0 

msg.question 
# => [[#<Resolv::DNS::Name: segv.me.>, Resolv::DNS::Resource::IN::A]]

```
