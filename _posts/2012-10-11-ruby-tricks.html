---
layout: post
title: "ruby tricks"
date: 2012-10-11 18:29:44
tags: ruby
---

</p>
James Edward Gray II, a Ruby Rogue, just gave a talk at the Aloha Ruby Conference about a bunch of Ruby tricks. Here are a few I'm cataloging, but they are all worth a looksy.
</p>

<p>
<b>Trap (with a twist):</b>
{% highlight ruby %}
require 'pry'

trap(:INT) do
  binding.pry
  trap(:INT, "EXIT")
end

loop do
  sleep
end
{% endhighlight %}
</p>

<p>
<b>Daemonize:</b>
{% highlight ruby %}
Process.daemon

loop do
  sleep
end
{% endhighlight %}
</p>

<p>
<b>Subprocess:</b>
{% highlight ruby %}
# spawn([env,] command... [,options]) => pid
pid = spawn({"VAR" => 7564}, 
           "/usr/local/bin/program", 
           in: open("input-file"))

Process.wait(pid)
{% endhighlight %}
</p>

<p>
<b>Ruby Command Flags:</b><br />
The Ruby executable has many useful flags as well, recall that the global variable <span class="mono">$_</span> in Ruby has the value of the last string read by <span class="mono">gets</span>.
{% highlight bash %}
-e    execute specified Ruby code.
       % ruby -e 'puts "ohai"'
       ohai

-n    performs the following on input files.
       while gets
           ...
       end

       % ruby -n -e 'puts $_.upcase' foobars
        FOO
        BAR

-p    same as n, except print the value of $_ after each loop

       % ruby -p -e '$_.upcase!'  foobars
        FOO
        BAR


-i    extension   in-place modification of input files, 
      specify file extension backup file (e.g. .bak) 

       % echo matz > /tmp/junk
       % cat /tmp/junk
        matz
       % ruby -p -i.bak -e '$_.upcase!' /tmp/junk
       % cat /tmp/junk
        MATZ
       % cat /tmp/junk.bak
        matz

{% endhighlight %}
</p>

<p>
<a href="https://speakerdeck.com/u/jeg2/p/10-things-you-didnt-know-ruby-could-do?utm_source=rubyweekly&utm_medium=email">https://speakerdeck.com/u/jeg2/p/10-things-you-didnt-know-ruby-could-do?utm_source=rubyweekly&utm_medium=email</a>
<p>
