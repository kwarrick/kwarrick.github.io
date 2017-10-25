---
title: "slippy, do a barrel roll"
date: 2011-12-05 01:55:22
tags: ["strlen"]
---

Stumbled upon this in a stackoverflow answer. Naive C programmers write this
sort of loop:

```c
for (int cnt=0; cnt < strlen(s) ; cnt++) {
  /* some code */
}
```

That's logically an O(n<sup>2</sup>) algorithm because of the implementation 
of strlen().

Even though I know `strlen` is implemented very efficiently, let's not do this.

http://stackoverflow.com/questions/111426/did-you-apply-computational-complexity-theory-in-real-life/111861#111861
