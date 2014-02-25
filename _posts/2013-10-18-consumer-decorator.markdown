---
layout: post
title: "consumer decorator"
date: 2013-10-18 20:25:56
tags: python coroutines
---

<p>
Just stumbled across this little gem, and I don't want to forget about it. Here is a decorator that takes care of the ugliness in first call to <span class="mono">.next()</span>, necessary for receiving coroutines in Python.

{% highlight python %}
def consumer(func):
  def start(*args,**kwargs):
  c = func(*args,**kwargs)
  c.next()
  return c
  return start
{% endhighlight %}

{% highlight python %}
@consumer
def recv_count():
 try:
   while True:
     n = (yield) # Yield expression
     print "T-minus", n
 except GeneratorExit:
   print "Kaboom!"
{% endhighlight %}
</p>

</p>
<p>
<a href="http://www.dabeaz.com/coroutines/Coroutines.pdf">http://www.dabeaz.com/coroutines/Coroutines.pdf</a>
</p>
