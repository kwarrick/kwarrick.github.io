---
title: "tabindex"
date: 2012-02-14 01:01:26
tags: ["html", "tabindex"]
---

<p>
Hey Web Developers, how about when you add a login form to a page you <u><b><i>ALWAYS</i></b></u> add a <span class="mono">tagindex</span> attribute and make the username and password fields the first elements in the tabbing order.
</p>

<p>
The internet thanks you, KTHXBYE.

{% highlight html %}
<p>
<label for="user">Username</label> <br />
<input name="user" tabindex="1" type="text" value="" />
</p>

<p>
<label for="pass">Password</label> <br />
<input name="pass" tabindex="2" type="password" value="" />
</p>
{% endhighlight %}
</p>

<p>
<a href="http://www.w3.org/TR/html4/interact/forms.html#adef-tabindex">http://www.w3.org/TR/html4/interact/forms.html#adef-tabindex</a>
</p>
