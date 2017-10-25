---
title: "ruby fiddle 1.9.3"
date: 2012-02-14 05:10:59
tags: ["ruby", "fiddle", "error"]
---

<p>
After watching Peter Cooper's <i>Ruby Trick Shots</i> I wanted to experiment with loading dynamic libraries in Ruby as he demoed. 
</p>

<p>
Maddeningly, when I tried to require <span class="mono">fiddle</span>, Ruby was throwing a LoadError:

<pre style="font-size:18px;">
LoadError: cannot load such file -- fiddle
</pre>
</p>

<p>
Digging into the RVM logs in ~/.rvm/log/ruby-1.9.3-p0, I found that when RVM compiled Ruby it failed to find the <span class="mono">ffi.h</span> header and subsequently did not install fiddle.

{% highlight bash %}
$ grep -A 2 fiddle ~/.rvm/log/ruby-1.9.3-p0/make.log 
configuring fiddle
<b>ffi.h is missing.</b> Please install libffi.
...
{% endhighlight %}
</p>

<p>
So, as usual this is a dependency problem and your solution is an apt-get away:

{% highlight bash %}
$ sudo apt-get install libffi5 libffi-dev
{% endhighlight %}
</p>

<p>

Now, I can finally run Peter's code:

{% highlight ruby %}
#!/usr/bin/env ruby

require 'fiddle'

libc = DL.dlopen "libc.so.6"

f = Fiddle::Function.new(libc['strlen'],
                         [Fiddle::TYPE_VOIDP],
                         Fiddle::TYPE_INT)

p f.call("foo").to_i
{% endhighlight %}
</p>

<p>
<a href="http://rubyreloaded.com/trickshots/">http://rubyreloaded.com/trickshots/</a> <br />
<a href="http://rubydoc.info/stdlib/fiddle/frames">http://rubydoc.info/stdlib/fiddle/frames</a>
</p>
