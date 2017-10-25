---
title: "shell uptime"
date: 2012-01-13 03:23:46
tags: bash uptime variables
---

<p>
Bash has many reserved variables, but one of the most fun for screen junkies is the <b><span class="mono">$SECONDS</span></b> variable, which displays "the number of seconds since the shell was started".
</p>

{% highlight bash %}
$ echo $SECONDS
2012339

$ echo $(($SECONDS/60)) minutes
33541 minutes

$ echo $(($SECONDS/60/60)) hours
559 hours

$ echo $(($SECONDS/60/60/24)) days 
23 days

{% endhighlight %}

<p>
<a href="http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html">http://tldp.org/LDP/Bash-Beginners-Guide/html/sect_03_02.html</a>
</p>
