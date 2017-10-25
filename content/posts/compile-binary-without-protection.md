---
title: "compile binary without protection"
date: 2012-09-25 14:19:28
tags: ["gcc", "buffer", "overflow", "c"]
---

<p>
Compile a 32bit binary with an executable stack and no canary values:

```
gcc -m32                      
    -fno-stack-protector
    -zexecstack
    -mpreferred-stack-boundary=2
    -o foo foo.c
```
</p>
