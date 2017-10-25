---
title: "python equivalent to argf or diamond operator"
date: 2013-02-03 23:21:32
tags: ["python", "argf"]
---

Ruby has [ARGF][1] and Perl has the [diamond operator][2], but what convenience
object or operator does Python provide for reading from files provided on the
command line or `stdin`?

```python
import fileinput
for line in fileinput.input():
    process(line)
```
[1]:http://www.ruby-doc.org/core-1.9.3/ARGF.html
[2]:http://perldoc.perl.org/perlop.html#I%2fO-Operators
http://docs.python.org/2/library/fileinput.html
