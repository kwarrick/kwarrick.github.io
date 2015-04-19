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

**Update**

If you are curious what instructions the bit flip changed, here it is:

```shell
diff <(objdump -D -M intel libm-2.19.so.working | grep -E '^\s+14e..:') \
     <(objdump -D -M intel libm-2.19.so.broken | grep -E '^\s+14e..:')

40,45c40,50
<    14e9e:	c1 fa 14             	sar    edx,0x14
<    14ea1:	81 e6 ff ff 0f 00    	and    esi,0xfffff
<    14ea7:	81 fe 9d a0 06 00    	cmp    esi,0x6a09d
<    14ead:	0f 8f 4d 04 00 00    	jg     15300 <__log10_finite+0x680>
<    14eb3:	89 d1                	mov    ecx,edx
<    14eb5:	81 ce 00 00 f0 3f    	or     esi,0x3ff00000
---
>    14e9e:	e1 fa                	loope  14e9a <__log10_finite+0x21a>
>    14ea0:	14 81                	adc    al,0x81
>    14ea2:	e6 ff                	out    0xff,al
>    14ea4:	ff 0f                	dec    DWORD PTR [rdi]
>    14ea6:	00 81 fe 9d a0 06    	add    BYTE PTR [rcx+0x6a09dfe],al
>    14eac:	00 0f                	add    BYTE PTR [rdi],cl
>    14eae:	8f                   	(bad)
>    14eaf:	4d 04 00             	rex.WRB add al,0x0
>    14eb2:	00 89 d1 81 ce 00    	add    BYTE PTR [rcx+0xce81d1],cl
>    14eb8:	00 f0                	add    al,dh
>    14eba:	3f                   	(bad)

```

Looks like I need to start backing up the disk, now.
