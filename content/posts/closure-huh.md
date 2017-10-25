---
layout: post
title: "closure, huh?"
date: 2012-02-13 03:38:16
tags: ruby closure
---

<p>
A <b>closure</b> is a block of code bound to its lexical environment, which is the set of variables in scope when the closure was created. This means that even after the variables have gone out of primary scope, the closure still has access to them.

{% highlight ruby %}
def foo
  x, y = [1,2]
  p = proc do
    puts x
    x += 1
    puts y
    y += 1
  end

  return p
end

def bar(p)
  x = "a"
  y = "b"
  p.call
  p.call
end


p = foo()
bar(p)
bar(p)

# 1
# 2
# 2
# 3
# 3
# 4
# 4
# 5

{% endhighlight %}
</p>

<p>
<del>
A set is closed under an operation iff the operation produces another element of the set. A closure is closed over its variables.
</del>
</p>

<p>
Keep in mind that the variables are closed but not isolated in Ruby. A reference is kept to the variables for the closure so changes can be made to contents of the variables outside of the context of the closure while they are still in scope.
</p>

<p>
<b>ANONYMOUS FUNCTION</b> : LITERAL :: <b>CLOSURE</b> : VALUE
<br />
Anonymous functions don't have to be bound to their lexical environment, but in many languages anonymous functions are the mechanism for creating closures.
</p>

<p>
<a href="http://www.ruby-doc.org/core-1.9.3/Proc.html">http://www.ruby-doc.org/core-1.9.3/Proc.html</a>
<a href="http://en.wikipedia.org/wiki/Closure_(mathematics)">http://en.wikipedia.org/wiki/Closure_(mathematics)</a>
<a href="http://en.wikipedia.org/wiki/Closure_(computer_science)">http://en.wikipedia.org/wiki/Closure_(computer_science)</a>
</p>
