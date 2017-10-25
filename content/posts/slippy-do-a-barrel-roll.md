---
title: "slippy, do a barrel roll"
date: 2011-12-05 01:55:22
tags: ["strlen"]
---

<p>
Stumbled upon this in a stackoverflow answer. Naive C programmers write this sort of loop:

{% highlight c %}
for (int cnt=0; cnt < strlen(s) ; cnt++) {
  /* some code */
}
{% endhighlight %}
</p>

<p>
That's an O(n<sup>2</sup>) algorithm because of the implementation 
of strlen().
</p>

<p>
Even though I know <span class="mono">strlen</span> is implemented very efficiently, let's not do this. <br /><br />
<a href="http://stackoverflow.com/questions/111426/did-you-apply-computational-complexity-theory-in-real-life/111861#111861">http://stackoverflow.com/questions/111426/did-you-apply-computational-complexity-theory-in-real-life/111861#111861</a>
</p>
