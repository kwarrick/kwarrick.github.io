---
title: "zsh automatically report time stats for long processes"
date: 2013-03-24 05:16:28
tags: zsh time
---

<p>
{% highlight bash %} 
export REPORTTIME=60
{% endhighlight %}
</p>

<p>
Setting the variable <span class="mono">REPORTTIME</span> to a value greater than zero will make ZSH automatically print execution times after the command finishes.
</p>

<p>
<blockquote>
If nonzero, commands whose combined user and system execution times (measured in seconds) are greater than this value have timing statistics printed for them.
</blockquote>
</p>

<p>
<a href="http://zsh.sourceforge.net/Doc/Release/Parameters.html#index-REPORTTIME">http://zsh.sourceforge.net/Doc/Release/Parameters.html#index-REPORTTIME</a>
</p>
