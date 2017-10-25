---
title: "zsh globbing qualifiers"
date: 2012-09-27 16:02:29
tags: ["zsh", "globbing", "extglob"]
---

<p>
Globbing is the term for pattern matching that shells use to expand wildcards like * or ?.  In <b class="mono">zsh</b>, globbing patterns can be followed by a list of qualifiers inside of parenthesis, which restrict the filenames that match the glob.
</p>

<p>
For example, here are a few globs with simple modifiers:

{% highlight bash %}
# . modifier means all "plain files"
% ls *(.) 
foo.txt  bar.jpg

#  * modifier means all "executable plain files"
% ls *(*)        
a.out
{% endhighlight %}
</p>

<p>
Normally, the * wildcard would match and expand to all files in the directory (except hidden dot-files). However, with a modifier specified in parens after the glob, you can qualify or restrict your glob.<br />
</p>

<p>
Besides filtering, you can also specify sorting qualifiers:

<pre>
<b class="mono">o<i>c</i></b> &mdash; sort by criteria <i class="mono">c</i> ascending.

<b class="mono">O<i class="mono">c</i></b> &mdash; sort by criteria <i class="mono">c</i> descending.
</pre>
</p>

<p>
Where criteria <i class="mono">c</i> can be:
<pre>
<b>n</b>   name  (default)
<b>L</b>   size (length) of file
<b>a</b>   access time
<b>m</b>   modification time
<b>c</b>   creation time
</pre>
</p>

<p>
Here is the magic, qualifiers can actually be indexed with square braces of the form <span class="mono">[beg[,end]]</span>. For example, you can get the most recently modified file:

{% highlight bash %}
# glob for the newest file by modification
% ls -lha *(om[1])
quux

# glob for the oldest file by modification
% ls -lha *(Om[1])
a.out
{% endhighlight %}
</p>

<p>
<a href="http://zsh.sourceforge.net/Doc/Release/Expansion.html#Glob-Qualifiers">http://zsh.sourceforge.net/Doc/Release/Expansion.html#Glob-Qualifiers</a>
</p>
