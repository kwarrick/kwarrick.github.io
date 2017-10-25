---
title: "tail"
date: 2013-10-16 22:59:37
tags: linux tail
---

<p>
I didn't know tail could be used to skip lines in a file:
</p>

<pre>
Numbers having a leading plus (`+') sign are relative to the beginning of the input
</pre>

<p>
{% highlight bash %}
# skip first line, start from second line
tail -n+2 file
{% endhighlight %}
</p>
