---
title: "_start to main"
date: 2014-10-20
tags: linux libc
---

Compiled with `libc`, a program's `_start` procedure will simply call `__libc_start_main`:

```asm
_start:
  xor   ebp, ebp               ; zero ebp as recommended by ABI spec
  pop   esi                    ; pop argc into esi
  mov   ecx, esp               ; move **argv to ecx, without altering stack
  and   esp, 0FFFFFFF0h        ; mask clears bottom 4 bits, 16 byte align
  push  eax                    ; setup args for __libc_start_main [1]
  push  esp                    ; push *stack_end
  push  edx                    ; push *rtld_fini, linker destructor
  push  offset __libc_csu_fini ; push *fini, finalizer function pointer
  push  offset __libc_csu_init ; push *init, initializer function pointer
  push  ecx                    ; push **ubp_av, argv from stack
  push  esi                    ; push argc, argc from stack
  push  offset main            ; push address of main(argc, argv, envp)
  call  ___libc_start_main     ; call __libc_start_main procedure
  hlt                          ; halt program
```

```cpp
 int __libc_start_main( 
    int (*main) (int, char**, char**),
    int argc, 
    char **ubp_av,
    void (*init) (void),
    void (*fini) (void),
    void (*rtld_fini) (void),
    void (* stack_end) );
```

[1]: `push eax` is junk; only added to align to 8 arguments; never used.

For a more thorough and friendly explanation see this article:  
[Linux x86 Program Start Up or - How the heck do we get to main()?](http://dbp-consulting.com/tutorials/debugging/linuxProgramStartup.html).

