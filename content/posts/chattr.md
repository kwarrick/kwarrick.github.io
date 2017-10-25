---
title: "chattr"
date: 2012-10-15 19:34:36
tags: chattr e2fsprogs linux
---

<p>
A friend reminded me about <span class="mono"><b>chattr</b></span>. Linux ext{2,3,4} filesystems have supplementary file attributes which can be modified with the "<i>ch</i>ange <i>attr</i>ibutes" utility found in the e2fsprogs package.
</p>

<p>
The two most interesting in my opinion are <span class="mono">+/- i</span> for <b>immutable</b> and <span class="mono">+/- j</span> for <b>secure deletion</b>:

{% highlight bash %}
% sudo chattr +i /bin/ps
% sudo chattr +j secret.txt

% lsattr bar
----i----j---e- bar
{% endhighlight %}
</p>