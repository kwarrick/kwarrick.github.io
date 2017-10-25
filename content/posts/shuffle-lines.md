---
title: "shuffle lines"
date: 2012-01-13 03:32:24
tags: ruby argf shuffle one-liner
---

<p>
Using Ruby's special stream, <b><span class="mono">ARGF</span></b>, shuffling the lines in a file is trivial:

{% highlight bash %}
$ cat foo.txt | 
ruby -e "puts ARGF.readlines.collect.shuffle rescue Errno::EPIPE"
{% endhighlight %}
</p>
