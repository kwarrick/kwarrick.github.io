---
title: "bit hacks"
date: 2013-02-09 02:10:55
tags: ["bits"]
---

<p>
Test if the n<sup>th</sup> bit is set.

```
(x & (1 << n))
```
</p>

<p>
Set the n<sup>th</sup> bit.
```
x = x | (1 << n)
```
</p>

<p>
Unset the n<sup>th</sup> bit.

```
x = x & ~(1 << n)
```
</p>

<p>
Toggle the n<sup>th</sup> bit.

```
x = x ^ (1 << n)
```
</p>


<p>
<a href="http://www.catonmat.net/blog/low-level-bit-hacks-you-absolutely-must-know/">http://www.catonmat.net/blog/low-level-bit-hacks-you-absolutely-must-know/</a>
</p>
