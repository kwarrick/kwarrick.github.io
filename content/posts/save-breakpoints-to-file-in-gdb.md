---
title: "save breakpoints to file in gdb"
date: 2013-04-21 07:38:06
tags: gdb
---

<p>
It took me entirely too long to look this up, but you can store your breakpoints to a file and restore them with the following commands:

{% highlight text %}
save breakpoints [filename]
source [filename]
{% endhighlight %}
</p>
