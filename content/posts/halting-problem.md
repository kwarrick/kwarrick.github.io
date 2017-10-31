---
title: "halting problem"
date: 2017-10-30
---

#### Simple halting problem proof found in SICP[^1]:


> **Exercise 4.15.**  Given a one-argument procedure `p` and an object `a`, `p`
> is said to \`\`halt'' on `a` if evaluating the expression `(p a)` returns a
> value (as opposed to terminating with an error message or running forever).
> Show that it is impossible to write a procedure `halts?` that correctly
> determines whether `p` halts on `a` for any procedure `p` and object `a`. Use
> the following reasoning: If you had such a procedure `halts?`, you could
> implement the following program:


> ```scheme
> (define (run-forever) (run-forever))
> 
> (define (try p)
>   (if (halts? p p)
>       (run-forever)
>       'halted))
> ```

> Now consider evaluating the expression (try try) and show that any possible
> outcome (either halting or running forever) violates the intended behavior of
> halts?

[^1]: https://mitpress.mit.edu/sicp/full-text/book/book-Z-H-26.html#%_thm_4.15


**Case 1:**  
Procedure `try` halts when passed itself as input. Hence, halts? would return
true and `try` would loop forever &mdash; a contradiction.

**Case 2:**  
Procedure `try` loops forever. Hence, `halt?(try, try)` returns false, `try`
halts on input `try` &mdash; a contradiction.

--------------------------------------------------------------------------------

#### Cantor Diagonalization[^2]:

A program is really just one big number, which means that all possible programs
are countably infinite.  So, for the sake of contradiction, suppose an oracle
exists that solves the halting problem. First we list out all of the possible
programs. Next, we can create a grid by listing all the possible inputs for
each program on the adjacent axis.

<pre style="margin-left: 30%;">
  A  B  C  D  E  …    <b>All all possible inputs on X-axis.</b>
A
B
C
D
E
…

<b>All possible programs on Y-axis.</b>


</pre>

Each program, when run on each input, will either halt or loop forever, thus
our outputs will fill the table, e.g.

<pre style="margin-left: 30%;">
   A  B  C  D  E
A  <b>H</b>  L  H  L  H
B  H  <b>H</b>  H  H  H
C  L  H  <b>L</b>  H  H
D  H  L  L  <b>L</b>  H
E  H  H  H  L  <b>H</b>

<b>H: Halts, L: Loops</b>
</pre>


Now, we create a new row by taking the elements at the diagonal (i.e the first
element from the first row, the second element from the second row, etc.) and
flipping Halt to Loop and Loop to Halt.

<pre style="margin-left: 30%;">
<b>L  L  H  H  L</b>
</pre>

**Where does this new row appear on the list?**
It cannot appear on the list because it is different from each row by at least
one element.

This table is defined as the complete list of all possible programs and inputs,
but we can never write a program that matches this new row for _all_ inputs.

Cantor Diagonalization is actually very similar to the first proof. The `halt?`
procedure does the opposite of what each program does, just as we constructed
the row from the diagonal. We assumed that the oracle exists, but have shown
that it cannot exists. Hence, we have proven by contradiction that halting
problem is undecidable.

[^2]: https://youtu.be/wGLQiHXHWNk?t=3m50s


