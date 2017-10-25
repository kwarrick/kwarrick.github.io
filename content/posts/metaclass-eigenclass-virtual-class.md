---
title: "metaclass / eigenclass / virtual class"
date: 2013-04-10 17:37:59
tags: ["ruby"]
---

```ruby
class Object
  def metaclass
    class << self
      self 
    end
  end
end
```

A few must read posts about metaprogramming in Ruby:

* http://dannytatom.me/metaid/
* http://rubylearning.com/blog/2010/11/30/how-do-i-build-dsls-with-yield-and-instance_eval/
* http://yehudakatz.com/2009/11/15/metaprogramming-in-ruby-its-all-about-the-self/
* http://madebydna.com/all/code/2011/06/24/eigenclasses-demystified.html
