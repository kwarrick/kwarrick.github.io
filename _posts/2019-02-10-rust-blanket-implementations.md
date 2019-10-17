---
layout: post
title: "rust blanket implementations"
date: 2019-02-10
---

## I <3 Ruby

Learning Ruby changed my perception of programming. I was a young programmer.
Coming from the strictures of Java and the rudiments of C - even with quite a
bit of experience with Python - Ruby was truly liberating.

Ruby's closures and function chaining were so beautifully concise, and the
standard library, namely the [Enumerable][1] mixin, were so "ergonomic".
Leagues better than Java 7, and even better than Python and its lovely
comprehensions in my experience.

I remember bouncing back from Python to Ruby in fits of rage because things
were just so much more elegant. Alas, Python is much more popular in my domains
of interest.

So, sadly Ruby is no longer my daily driver. Python took over because the
tooling and utilities I wanted were in Python, and it is a common denominator
when collaborating.

I started learning Rust for many reasons, but in a large part because no amount
of TDD, unit testing, regression testing, integration testing, blah blah blah
can truly mitigate the - null, nil, None, undefined, duck - "dynamic debt". I
wanted a strong, statically typed, and compiled language. No more stupid
exceptions, please 🙏!

Learning Rust has been just as liberating as learning Ruby a decade ago, if not
a bit more harrowing. _Blasted borrow checker._

If you love Ruby as I do, you will find a lot to love about Rust too. Looking
at the [Iterator][2] documentation, you can see some of the combinators I
have missed so much from [Enumerable][1].

Ruby also has the concept of "open classes", which I always look for in new
languages:

```ruby
class String
  def is_hex?
    self.match? /^[0-9a-f]+$/i
  end
end

"CAFEBABE".is_hex?
# => true
```

When I learned that you can "reopen" classes, even those from the standard
library, I was blown away. "OH, THE POSSIBILITIES!"

Rails really leverages this to great effect.  Ruby indisputably excels in
building domain specific languages and frameworks. I really think Rust will
too, especially considering the power of macros.

_(People love to hate this design because of the potential for abuse, but those
butter-knife enthusiasts can shove it. I ain't ever scared.)_


## I <3 Rust

Rust of course has a totally different type system, but a beginner might try
something like:


```rust
impl String {
  // ...
}
```

This __will not work__. You'll get an error:

```
error[E0116]: cannot define inherent `impl` for a type outside of the crate where the type is defined
 --> test.rs:1:1
  |
1 | impl String {}
  | ^^^^^^^^^^^^^^ impl for type defined outside of crate.
  |
  = note: define and implement a trait or new type instead
error: aborting due to previous error
For more information about this error, try `rustc --explain E0116`.
```

Well fine, we can't just re-`impl` something willy-nilly, but actually can add
behavior to standard library types:


```rust
trait Hex {
    fn is_hex(&self) -> bool;
}

impl Hex for String {
    fn is_hex(&self) -> bool {
        self.bytes().all(|b| b.is_ascii_hexdigit())
    }
}

fn main() {
    let s = String::from("CAFEBABE");
    println!("{}", s.is_hex());
}
```

Everyone says "duh", thats the point of traits. Look man, this ain't object
oriented! This ain't even prototypal inheritance! It is new to some of us! 

Alright, so traits are slick, but they get even better. We finally come to
[blanket implementations][3]. They only get a little section in the Rust Book.
They need a neon sign.


<style type="text/css" rel="stylesheet">
.neon {
  text-decoration: none;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;

  color: #fff;
  -webkit-animation: neon1 1.5s ease-in-out infinite alternate;
  -moz-animation: neon1 1.5s ease-in-out infinite alternate;
  animation: neon1 1.5s ease-in-out infinite alternate;
}

@-webkit-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #4DA477, 0 0 70px #4DA477, 0 0 80px #4DA477, 0 0 100px #4DA477, 0 0 150px #4DA477;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #4DA477, 0 0 35px #4DA477, 0 0 40px #4DA477, 0 0 50px #4DA477, 0 0 75px #4DA477;
  }
}

@-moz-keyframes neon1 {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #4DA477, 0 0 70px #4DA477, 0 0 80px #4DA477, 0 0 100px #4DA477, 0 0 150px #4DA477;
  }
  to {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #4DA477, 0 0 35px #4DA477, 0 0 40px #4DA477, 0 0 50px #4DA477, 0 0 75px #4DA477;
  }
}

</style>

<h2 class="neon">
  BLANKET IMPLEMENTATIONS
</h2>

Learning Rust, you are quickly accustomed to using generic parameters. We use a
generic `Option<T>` as a concrete type `Option<u8>`. No problem, but I think
type signatures are a bit tedious to read as a beginner in a language; so it is
easy to overlook the very important distinction in this code:


```rust
impl<T: Display> ToString for T {
  // ...
}
```

Wait, so `impl` ... `for T`, but T is the generic parameter. We are actually
specifying an implementation for a generic. How the hell can we implement an
unknown? 

My mind is so used to `impl` being a strict "concretization" of generic
behavior 🤯.  I at least expect something concrete on the right side of `for`.

Of course, we aren't implementing an "unknown". While it is still generic, it
is bound to implement another trait, `<T: Display>`.

What we are actually doing is implementing a trait with explicit knowledge of
_some_ known behavior.

In this case, our generic type `T` is bound to implement `Display`. So, we can
of course use behavior guaranteed by that trait, specifically the `fmt` method,
to generate a string representation.

So, Rust's type system is pretty powerful. Not only can I implement new
behavior for concrete types, even those in the standard library, I can actually
implement behavior for __any type that implements a trait__.

"OH, THE POSSIBILITIES!"

----
Neon text effect shamelessly lifted from <https://codepen.io/FelixRilling/pen/qzfoc>.

[1]: <https://ruby-doc.org/core-2.6.1/Enumerable.html>
[2]: <https://doc.rust-lang.org/std/iter/trait.Iterator.html>
[3]: <https://doc.rust-lang.org/book/ch10-02-traits.html#using-trait-bounds-to-conditionally-implement-methods>
