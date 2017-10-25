---
title: "vim insert before pattern"
date: 2014-10-02 
tags: ["vim"]
---

Inserting a newline before lines matching a pattern, e.g. before comments #:

```vim
:g/^#/norm O
```

[http://stackoverflow.com/a/2673266/255528](http://stackoverflow.com/a/2673266/255528)
