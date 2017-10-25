---
title: "bash regex matching"
date: 2012-03-02 02:18:15
tags: bash regex
---

<p>
Incredibly, Bash allows you to do regular expression comparisons with the <span class="mono">=~</span> operator   that Ruby and Perl use:

{% highlight bash %}
$ if [[ "foo" =~ f.* ]]; then
    echo match
  fi
 
match

{% endhighlight %}
</p>

<p>
<a href="http://tldp.org/LDP/abs/html/abs-guide.html#REGEXMATCHREF">http://tldp.org/LDP/abs/html/abs-guide.html#REGEXMATCHREF</a>
</p>
