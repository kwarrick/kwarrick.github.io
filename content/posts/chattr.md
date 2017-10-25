---
title: "chattr"
date: 2012-10-15 19:34:36
tags: ["chattr", "e2fsprogs", "linux"]
---

A friend reminded me about `chattr`. Linux ext{2,3,4} filesystems have
supplementary file attributes which can be modified with the "<i>ch</i>ange
<i>attr</i>ibutes" utility found in the e2fsprogs package.

The two most interesting in my opinion are `+/- i` for <b>immutable</b> and
`+/- j` for <b>secure deletion</b>:

```bash
$ sudo chattr +i /bin/ps
$ sudo chattr +j secret.txt

$ lsattr bar
----i----j---e- bar
```
