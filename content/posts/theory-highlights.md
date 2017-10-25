---
title: "theory highlights"
date: 2012-02-19 03:13:01
tags: ["theory"]
---

> "This discussion highlights an important difference between complexity theory
> and computability theory. In computability theory, the Church-Turing thesis
> implies that all reasonable models of computation are equivalent - that is,
> they all decide the same class of languages. In complexity theory, the choice
> of model affects the time complexity of languages. Languages that are decidable
> in, say, linear time on one model aren't necessarily decidable in linear time
> on another."

> "The same language may have different time requirements on different models."

> "We show that any language that is decidable on [a nondeterministic
> single-tape machine] is decidable on a deterministic single-tape Turing
> machine that requires significantly more time."

<b>
Thanks Sipser, when I'm not being tested on the subject your book is really quite swell.
</b>

So a NP problem only takes polynomial time on a nondeterministic Turing
machine, which has infinite parallelism. Think NFA that splits each time it
encounters multiple possible paths. Every NFA has an equivalent DFA; however,
when that NFA is converted to an equivalent DFA, the number of states may be
exponential in the number of states in the NFA.


> "First, note the dramatic difference between the growth rate of a typically
> occurring polynomials such as n<sup>3</sup> and typically occurring
> exponentials such as 2<sup>n</sup>. For example, let n be 1000, the size of a
> reasonable input to an algorithm. In that case, n<sup>3</sup> is 1 billion, a
> large but manageable number, whereas 2<sup>n</sup> is a number much larger than
> the number of atoms in the universe. Polynomial time algorithms are fast enough
> for many purposes, but exponential time algorithms rarely are useful."

http://abstrusegoose.com/a/206.htm
http://www-math.mit.edu/~sipser/book.html
