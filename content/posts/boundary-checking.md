---
title: "boundary checking"
date: 2017-10-31
---

How difficult is boundary checking array accesses?

#### Step 1. Change all exits to infinite loops.
```C
int main() { 
  int a[32];
  for (int i = 0; i <= sizeof(a); i++ ) { // off-by-one bug
    a[i] = 0;
  }
  while (1) {}; // infinite loop
}
```

#### Step 2. Change all indexing expressions into:

```C
  ((i >= 0 && i < a.length) ? a[i] : exit())
```
-----------------------------------------------

```C
int main() { 
  int a[32];
  for (int i = 0; i <= sizeof(a); i++ ) { // off-by-one bug
    ((i >= 0 && i < a.length) ? a[i] : exit()) // boundary check
  }
  while (1) {}; // infinite loop
}
```

If the program terminates, your program has an array-bounds error. Otherwise,
if your program loops forever, you do not. Thus, you can see that boundary
checking is reducible to the halting problem.  **Both are undecidable.**

http://matt.might.net/articles/intro-static-analysis/
