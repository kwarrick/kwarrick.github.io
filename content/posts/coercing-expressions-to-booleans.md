---
title: "coercing expressions to booleans"
date: 2012-02-14 18:17:18
tags: ["ruby", "booleans"]
---

<p>
In Ruby, you may need to coerce an expression to an explicit boolean value.
<p>

<p>
Don't:
```
 b = defined?(foo) ? true : false
```
</p>

<p>
Do:
```
b = !!defined?(foo)
```
</p>

<p>
That is a double not (!) operator.
</p>

<p>
<a href="http://rubyrogues.com/032-rr-ruby-antipatterns/">http://rubyrogues.com/032-rr-ruby-antipatterns/</a>
</p>
