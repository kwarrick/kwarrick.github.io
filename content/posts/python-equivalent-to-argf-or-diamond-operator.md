---
title: "python equivalent to argf or diamond operator"
date: 2013-02-03 23:21:32
tags: ["python", "argf"]
---

<p>
Ruby has <a href="http://www.ruby-doc.org/core-1.9.3/ARGF.html">ARGF</a> and Perl has the <a href="http://perldoc.perl.org/perlop.html#I%2fO-Operators">diamond operator</a>, but what convenience object or operator does Python provide for reading from files provided on the command line or stdin?</p>

{% highlight python %}
import fileinput
for line in fileinput.input():
    process(line)
{% endhighlight %}

</p>

<p>
<a href="http://docs.python.org/2/library/fileinput.html">http://docs.python.org/2/library/fileinput.html</a>
</p>
