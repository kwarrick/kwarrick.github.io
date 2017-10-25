---
title: "linux syscalls"
date: 2012-06-15 21:36:09
tags: linux shellcode syscall
---

<p>
Where are linux system calls defined?
</p>

<p>
If you are crafting your own shellcode, you often need to find the syscall numbers. Syscalls are usually defined in:
<pre>
/usr/include/asm/unistd_32.h
/usr/include/asm/unistd_64.h
</pre>
</p>

