---
title: "Binary in Python"
date: 2011-12-03 23:14:03
tags: ["python", "binary", "format"]
---

Somehow, I often find myself wanting the binary representation of an integer. 

Well, Python of course has the builtin bin function, but the output always
begins with a pesky `0b`. 

Furthermore, bin doesn't support padding the binary to a certain length (e.g. 8
bits). So, I use string format:

```python
>>> bin(63)
'0b111111'

>>> '{0:08b}'.format(63)
'00111111'
```

Just for fun, here is a somewhat comical and more complicated example for
converting an ascii string to binary:

```python
>>> s = "foo"
>>> ("{:08b}"*len(s)).format(*map(ord,s))
'011001100110111101101111'

```

Format has many more features and reminds me of `printf` in some ways. I highly
recommend checking out the documentation.

http://docs.python.org/library/string.html#format-specification-mini-language
