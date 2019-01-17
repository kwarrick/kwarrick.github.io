---
layout: post
title: "linux program execution"
date: 2014-10-22
tags: ["linux", "elf"]
---

### How does Linux load a program for execution?

#### Overview

Loading an ELF[^1] executable into memory is handled by the `load_elf_binary`
function in `fs/binfmt_elf.c`.

`load_elf_binary` performs consistency checks, allocates memory, and loads each
segment into memory before calling the dynamic linker or starting execution of
the program.


<table style="text-align: center; font-size: 16px; background: #EFEFEB;">
<thead>
  <tr style="border-bottom: 2px solid #CCC;">
    <th style="background: #FFF;"></th>
    <th>Function</th>
    <th>Kernel File</th>
    <th>Annotation</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>1</td>
    <td><i>shell</i></td>
    <td></td>
    <td>Enter a command.</td>
  </tr>
  <tr>
    <td>2</td>
    <td>execve()</td>
    <td></td>
    <td>Shell calls libc function.</td>
  </tr>
  <tr>
    <td>3</td>
    <td>execve()</td>
    <td></td>
    <td>Libc does system call.</td>
  </tr>
  <tr>
    <td>4</td>
    <td><i>int 0x80</i></td>
    <td>arch/x86/kernel/entry_32.c</td>
    <td>Kernel takes control.</td> 
  </tr>
  <tr>
    <td>5</td>
    <td>do_execve()</td>
    <td>fs/exec.c</td>
    <td>Kernel opens executable file.</td>
  </tr>
  <tr>
    <td>6</td>
    <td>search_binary_handler()</td>
    <td>fs/exec.c</td>
    <td>Detect type of binary.</td>
  </tr>
  <tr style="background-color: #dad295;">
    <td>7</td>
    <td>load_elf_binary()</td>
    <td>fs/binfmt_elf.c</td>
    <td>Load ELF and libraries.</td>
  </tr>
  <tr>
    <td>8</td>
    <td>start_thread()</td>
    <td>arch/x86/kernel/process_32.c</td>
    <td>Execute program code.</td>
  </tr>
</tbody>
</table>

#### Notes[^2][^3]

This table is based off the table from this [article][1] for Linux 2.2.x
kernels.

Since 2.6, the `arch/i386` and `arch/x86_64` hierarchies were merged into a
[unified][2] `arch/x86` architecture.

System calls are now defined with the `SYSCALL_DEFINE` macros, and what was
once `sys_execve` is defined in `fs/exec.c` rather than `arch/i386/process.c`.
   
[1]: http://asm.sourceforge.net/articles/startup.htm
[2]: http://lwn.net/Articles/242439/

[^1]: <http://www.skyfree.org/linux/references/ELF_Format.pdf>
[^2]: <http://www.sco.com/developers/gabi/latest/contents.html>
[^3]: <http://s.eresi-project.org/inc/articles/elf-rtld.txt>
