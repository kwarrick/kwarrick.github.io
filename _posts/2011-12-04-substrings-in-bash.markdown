---
layout: post
title: "Substrings in Bash"
date: 2011-12-04 17:50:33
tags: bash substring
---

</p>
Bash has many useful string operations that I'll post about in the future, but for now I want to introduce parameter substitution and substring extraction.

<br /><br />

So, variables in bash are referenced by name and a $ prefix (e.g. $foo).

<br /><br />

A more explicit way of referencing <span class="mono">$foo</span> is to use curly braces to delimit your variable name and any subsequent characters, <span class="mono">${foo}</span>.

<br /><br />

This eliminates any ambiguity but is also the syntax for doing more advanced string operations.

<br /><br />

<b>Substrings</b>
<br />
<span class="mono">${variable:position:length}</span>

</p>

{% highlight bash %}
$ s="hello govna"

$ echo ${s:1}
ello govna

$ echo ${s:1:4}
ello
{% endhighlight %}

<p>

<a href="http://tldp.org/LDP/abs/html/parameter-substitution.html">http://tldp.org/LDP/abs/html/parameter-substitution.html</a><p>
