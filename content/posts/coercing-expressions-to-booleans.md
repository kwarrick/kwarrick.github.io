---
title: "coercing expressions to booleans"
date: 2012-02-14 18:17:18
tags: ["ruby", "booleans"]
---

In Ruby, you may need to coerce an expression to an explicit boolean value.

This:
```ruby
 b = defined?(foo) ? true : false
```

becomes:
```ruby
b = !!defined?(foo)
```

That is a double not (`!`) operator.

```txt
irb(main):001:0> !!false
=> false
irb():002:0> !!nil
=> false
irb(main):003:0> !!true
=> true
irb(main):
```

<a href="http://rubyrogues.com/032-rr-ruby-antipatterns/">http://rubyrogues.com/032-rr-ruby-antipatterns/</a>
