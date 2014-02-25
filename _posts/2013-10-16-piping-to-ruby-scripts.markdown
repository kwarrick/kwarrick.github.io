---
layout: post
title: "piping to ruby scripts"
date: 2013-10-16 23:33:52
tags: linux pipes ruby
---

</p>
Ruby, instead of exiting when it receives a SIGPIPE, throws an exception Errno:EPIPE which usually results in a stack trace.

{% highlight text %}
./foo.rb:8:in `write': Broken pipe - <STDOUT> (Errno::EPIPE)
{% endhighlight %}
</p>

<p>
Here is the idiomatic one-line to simply exit when your script gets a SIGPIPE:

{% highlight ruby %}
trap('PIPE', 'EXIT')
{% endhighlight %}<p>
