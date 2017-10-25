---
layout: post
title: "how long is the linux kernel, in miles?"
date: 2013-04-24 23:07:53
tags: linux nonsense
---

<p>
So, if we count the bytes in each .h, .s, and .c file what do we get?

{% highlight bash %}
find . -iname '*.c' -o -iname '*.h' -o -iname '*.s' -exec wc -c {} \; | 
ruby -n -e \
"puts ARGF.reduce(0) { |acc,val| acc + val.split.first.chomp.to_i }"
# 9190080
{% endhighlight %}
</p>

<p>
{% highlight text %}
(12 + 2)  /  300.0 * 9190080 / 12.0 / 5280.0
px font + px kerning / dpi * characters / foot  / mile
{% endhighlight %}
</p>

<p>
Approximately <b>6.7 miles</b>.
</p>
