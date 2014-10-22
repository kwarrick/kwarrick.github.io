---
layout: post
title: "loading an executable in linux"
date: 2014-10-22
tags: mac osx karabiner
---

**How does Linux load a program for execution?**

This is the second installment of an unofficial series of back-to-basics posts about program execution in Linux. 



**How is a binary stored?**

Consider a binary `a.out`.

```bash
$ file a.out
a.out: ELF 32-bit LSB  executable, Intel 80386, version 1 (SYSV), dynamically linked (uses shared libs), for GNU/Linux 2.6.24, BuildID[sha1]=4caad8e3ccf7e793c5e5b029b30f38ab4a4250f5, not stripped
```

We can see that `a.out` is an ELF file for an Intel x86 processor and conforms to the SYSV ABI (Application Binary Interface).

ELF is an acronym for Executable and Linkable Format, and is the file format for executables, object code, shared libraries, and even core dumps. 

ELF executable files contain the machine code in a section called `.text` and detail how the executable should be loaded into memory.

Find out all the gory details in the [ELF specification][1].

You may also like to read the more general [System V ABI][2].

[1]: http://www.skyfree.org/linux/references/ELF_Format.pdf
[2]: http://www.sco.com/developers/gabi/latest/contents.html "System V ABI"
