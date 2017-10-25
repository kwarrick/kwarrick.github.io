---
title: "Python unzip idiom"
date: 2012-01-30 08:53:04
tags: ["python", "zip", "unzip", "splat", "unpacking"]
---

The `*splat` operator is commonly used to **unzip** arrays in Python:

```python
>>> a = [1,2,3]

>>> b = [4,5,6]

>>> zip(a,b)
[(1, 4), (2, 5), (3, 6)]

>>> zip(*_)
[(1, 2, 3), (4, 5, 6)]

```

I've included another trick, the _ (underscore) is a shortcut in the
interactive interpreter for the last returned value, which works in irb too and
likely many others.
