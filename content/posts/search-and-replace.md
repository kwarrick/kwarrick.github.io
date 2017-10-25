---
title: "search and replace"
date: 2012-01-23 21:14:01
tags: ["search", "replace", "sed", "basics"]
---

<p>
Back to basics.

Search and replace in Sed uses a common syntax: 
</p>

<p>
<b><span class="mono">s/regexp/replacement/</span></b>

{% highlight text %}
$ sed 's/foo/bar/' file > new-file
{% endhighlight %}
</p>

<p>
However, that will only replace the first occurrence of foo per each line. If you would like to replace each instance of foo with bar, you'll need to add the g parameter:

{% highlight text %}
$ sed 's/foo/bar/g' file > new-file
{% endhighlight %}
</p>

<p>
Again, you may want to modify the file in-place, which can be done easily with the <span class="mono">-i</span> option:

{% highlight text %}
$ sed -i 's/foo/bar/g' file
{% endhighlight %}
</p>
