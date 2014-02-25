---
layout: post
title: "one-line tree in python"
date: 2012-08-30 03:05:30
tags: python tree
---

</p>
Brilliant:

{% highlight python %}
from collections import defaultdict

def tree(): return defaultdict(tree)
{% endhighlight %}
</p>

<p>
<a href="https://gist.github.com/2012250">https://gist.github.com/2012250</a><p>
