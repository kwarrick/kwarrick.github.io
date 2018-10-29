---
layout: post
title: "gdb show asm on break"
date: 2012-03-07 20:14:08
tags: ["gdb"]
---

Display a number of lines:
```txt
display /3i $pc
```

or

```txt
set disassemble-next-line on
```

http://stackoverflow.com/questions/1902901/show-current-instruction-in-gdb
