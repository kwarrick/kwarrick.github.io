---
title: "* splat"
date: 2011-12-11 19:08:53
tags: python splat unpacking arguments
---

<p>
Python has a seldom used unary operator that lets you "flatten" lists and dictionaries into function arguments.


{% highlight python %}
def foo(a, b, c):
  print a, b ,c

>>> li = [1, 2 ,3]
>>> foo(*li)
1 2 3

{% endhighlight %}
</p>

<p>
The * operator converts a dictionary to keyword arguments:

{% highlight python %}
def foo(bar=None, baz=None, quux=None):
  print bar, baz, quux

>>> d = {"bar":1, "baz":2, "quux":3}
>>> foo(**d)
1 2 3

{% endhighlight %}
</p>

<p>

Simple, but useful.<br /><br />

<a href="http://docs.python.org/tutorial/controlflow.html#unpacking-argument-lists">http://docs.python.org/tutorial/controlflow.html#unpacking-argument-lists</a>
</p>
