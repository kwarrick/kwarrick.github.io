---
title: "search and replace continued"
date: 2012-01-27 02:49:27
tags: search replace bash arguments
---

<p>
As an extension of <a href="http://segv.me/posts/9">Recycling Arguments</a> and the previous post on search and replace using Sed, I would like to show two Bash features for search in replace in previous commands:
</p>

<p>

Replace the first instance of foo in the previous command with bar:
{% highlight text %}
$ cat foo
$ ^foo^bar
cat bar
{% endhighlight %}

OR

{% highlight text %}
$ cat foo
$ !!:s/foo/bar
{% endhighlight %}
</p>

<p>

As you can see the second example uses the word designator with a syntax similar to that of Sed. However, one difference is that if you'd like to do a 'global' replace, you'll need to use the following syntax:

{% highlight text %}
$ cat /home/foo/a /home/foo/b
$ !!:gs/foo/bar
{% endhighlight %}
</p>

<p>
