---
layout: post
title: "ruby string.to_class"
date: 2012-01-16 18:54:14
tags: ruby constantize
---

<p>
{% highlight ruby %}
class String
  def to_class
    Kernel.const_get(self)
  end
end
{% endhighlight %}

<pre style="font-size:17px;">
ruby-1.8.7-p352 :012 > "Integer".to_class
 => Integer 
</pre>
</p>
