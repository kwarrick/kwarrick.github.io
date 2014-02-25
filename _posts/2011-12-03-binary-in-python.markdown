---
layout: post
title: "Binary in Python"
date: 2011-12-03 23:14:03
tags: python binary format
---

<p>
Somehow, I often find myself wanting 
the binary representation of an integer. 
<br />
Well, Python of course has the builtin bin function, but the output always begins with a pesky <span class="mono">0b</span>. 
<br />
Furthermore, bin doesn't support padding the binary to a certain length (e.g. 8 bits). So, I use string format:
<br />
</p>

<p>
{% highlight python %}
>>> bin(63)
'0b111111'

>>> '{0:08b}'.format(63)
'00111111'
{% endhighlight %}
</p>


<p>
Just for fun, here is a somewhat comical and more complicated example for converting an ascii string to binary:

{% highlight python %}

>>> s = "foo"
>>> ("{:08b}"*len(s)).format(*map(ord,s))
'011001100110111101101111'

{% endhighlight %}
</p>


<p>
Format has many more features and reminds me of printf in some ways. I highly recommend checking out the documentation.

<br />
<a href="http://docs.python.org/library/string.html#format-specification-mini-language">http://docs.python.org/library/string.html#format-specification-mini-language</a>
</p>
