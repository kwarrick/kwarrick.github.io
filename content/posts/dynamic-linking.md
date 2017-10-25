---
title: "dynamic linking"
date: 2014-12-15
tags: ["linux", "ld", "elf"]
---

Deciphering the indirection of runtime dynamic linking can be a bit tricky. 

I always seem to forget how the PLT and GOT interact.

Consider this simple example of calling the `puts` function in the dynamically linked `libc`: 

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
	puts("foo bar baz qux");
	return 0;
}
```


```bash
$ gcc test.c -o test 

# Show the dynamically linked libraries for the test binary.
$ ldd test 
	linux-gate.so.1 =>  (0xb77d4000)
	libc.so.6 => /lib/i386-linux-gnu/libc.so.6 (0xb7615000)
	/lib/ld-linux.so.2 (0xb77d5000)
```

Disassembling `test`, you'll find a call to `puts`, which is located in the dynamically linked library `libc.so.6`:

```asm
0804842d:  call   80482f0 <puts@plt>
```

So, the PLT (procedure linkage table) is responsible for jumping to the `puts` function if the dynamic linker `ld-linux.so.2` has already found the function in libc, or otherwise jumping to `ld` to find and link the function:

```asm
080482f0 <puts@plt>:
 80482f0:   jmp    DWORD PTR ds:0x804a00c  ; jump to address in 0x804a00c
 80482f6:   push   0x0                     ; push index of puts in GOT
 80482fb:   jmp    80482e0 <_init+0x30>    ; jump to ld trampoline
```

First, notice that the jump at `0x8048df0` is actually a jump to a `PTR`, which means it does not jump to the address `0x804a00c` but rather the address stored at that address:

```
(gdb) info file
0x0804a000 - 0x0804a018 is .got.plt

(gdb) x/wx 0x804a00c
0x804a00c <puts@got.plt>:	0x080482f6
```

So, we can see that the address `0x804a00c` is actually in the `.got.plt` section, and is where the address of `puts` will be stored when `ld` links the function.

However, it is initialized to the value `0x080482f6`, which is actually the address of `push 0x0`, directly below the jump.

After pushing the value `0x0` to the stack, we jump again to the code that will actually take us into `ld` to perform the runtime lookup and linking:

```asm
080482e0 <puts@plt-0x10>:
 80482e0:  push   DWORD PTR ds:0x804a004   ; push address of link_map
 80482e6:  jmp    DWORD PTR ds:0x804a008   ; jump to _dl_fixup() in ld
 80482ec:  add    BYTE PTR [eax],al
```

Inspecting the two addresses, which you should note are stored immediately before the `puts` address in the `.got.plt`, we see that both addresses are in pages mapped to `ld`:

```
(gdb) x/wx 0x804a004
0x804a004:	0xb7fff938

0xb7fff000 0xb8000000 rw-p	/lib/i386-linux-gnu/ld-2.19.so

(gdb) x/wx 0x804a008
0x804a008:	0xb7ff24f0

0xb7fde000 0xb7ffe000 r-xp	/lib/i386-linux-gnu/ld-2.19.so
```

So, you can see the first address is in writable space and the second executable. In the next post, I'll discuss what happens in `ld`. 

