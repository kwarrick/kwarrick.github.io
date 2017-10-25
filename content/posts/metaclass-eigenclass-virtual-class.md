---
title: "metaclass / eigenclass / virtual class"
date: 2013-04-10 17:37:59
tags: ["ruby"]
---

<p>
```
class Object
  def metaclass
    class << self
      self 
    end
  end
end
```
</p>

<p>
A few must read posts about metaprogramming in Ruby:

<ul>
<li>
<a href="http://dannytatom.me/metaid/">http://dannytatom.me/metaid/</a>
</li>
<li><a href="http://rubylearning.com/blog/2010/11/30/how-do-i-build-dsls-with-yield-and-instance_eval/">http://rubylearning.com/blog/2010/11/30/how-do-i-build-dsls-with-yield-and-instance_eval/</a>
</li>
<li>
<a href="http://yehudakatz.com/2009/11/15/metaprogramming-in-ruby-its-all-about-the-self/">http://yehudakatz.com/2009/11/15/metaprogramming-in-ruby-its-all-about-the-self/</a>
</li>
<li><a href="http://madebydna.com/all/code/2011/06/24/eigenclasses-demystified.html">http://madebydna.com/all/code/2011/06/24/eigenclasses-demystified.html</a>
</li>
</ul>
<p>
