---
layout: post
title: "one bad lib"
date: 2015-04-19
tags: dhex
---

Last night both Firefox and Chrome began crashing at startup. After fighting 
with it for almost an hour I gave up and kept working, resolving to fix them in the 
morning.

Well, then Vim started crashing at startup too. Uh uh honey, no no no.
 
A tail of `dmesg` revealed the problem - `libm-2.19`:

```
[10567.643135] traps: python[18389] general protection ip:7efe0933eea2 sp:7ffff5087f30 error:0 in libm-2.19.so[7efe0932a000+105000]

[10591.556424] traps: chromium-browse[18584] general protection ip:7f6aaed27ea2 sp:7ffc2a01cf30 error:0 in libm-2.19.so[7f6aaed13000+105000]

[10875.658269] traps: apt-check[18686] general protection ip:7fd1d03f4ea2 sp:7ffdc7554530 error:0 in libm-2.19.so[7fd1d03e0000+105000]

```

I replaced `libm-2.19` with a version from another machine running the same distro
and version, and everything started working again. 

But, having spent a lot of time raging and slapping down commands, I really wanted 
to know what the hell happened to `libm`.

Introducing [dhex](http://www.dettus.net/dhex/), a hex editor with an awesome diff mode.

<img src="/img/dhex.png" />
That is it. Somehow an `0xC1` became an `0xE1`. Yep, `0x1100 0001` became `0x1110 0001`.

One bad bit, one bad byte, one bad lib.

<img src="/img/patching.png" />

Imagine the mayhem one bad bit in `libc` could cause.


