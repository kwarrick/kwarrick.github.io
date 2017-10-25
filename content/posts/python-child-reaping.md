---
title: "python child reaping"
date: 2012-01-12 19:19:06
tags: python sockets fork child signals
---

<p>
When creating the "hello world" of socket programming, a forking echo server/client, programmers often forget to reap child processes. 
</p>

<p>
Interestingly, Wikipedia has a table of code for automatically reaping children in several different languages.
</p>

<p>
In Python it is rather simple using the standard SIG_IGN handler:
</p>

{% highlight python %}
signal.signal(signal.SIGCHLD, signal.SIG_IGN)
{% endhighlight %}

<p>
<a href="http://docs.python.org/library/signal.html">http://docs.python.org/library/signal.html</a>
<br />
<a href="http://en.wikipedia.org/wiki/SIGCHLD">http://en.wikipedia.org/wiki/SIGCHLD</a>
</p>
