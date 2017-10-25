---
title: "dynamic linking continued"
date: 2014-12-16
tags: ["linux", "ld", "elf"]
---

In the last post, I showed how an unlinked library function invokes `ld`. In
this post, I will show what happens in `ld`.  

I talk about how `eglibc` does runtime linking in the current Ubuntu 14.04.1.
However, it seems the two libraries `glibc` and `eglibc` have reconciled their
past differences and `eglibc` has been discontinued. So, likely, Ubuntu will
use `glibc` again in 15. 

In any event, the two should be next to identical.

Find the sources for `/lib/ld-linux.so.2` in the `eglibc` package inside the
`elf` directory.

```bash
$ apt-get source eglibc
```

### \_dl\_fixup

So, we left off in the last post with the binary jumping in the PLT to
`_dl_fixup`, 

```asm
  ...
 80482f6:  push   0x0                      ; push index of puts in GOT
  ...
 80482e0:  push   DWORD PTR ds:0x804a004   ; push address of link_map
 80482e6:  jmp    DWORD PTR ds:0x804a008   ; jump to _dl_fixup() in ld
```

which is located in `dl-runtime.c`:

```c
// dl-runtime.c 
_dl_fixup (struct link_map *l, ElfW(Word) reloc_arg)
{ 

  // ...
  result = _dl_lookup_symbol_x (strtab + sym->st_name, l, &sym, l->l_scope,
				    version, ELF_RTYPE_CLASS_PLT, flags, NULL);
}
```

Notice the function takes two arguments. 

The address pushed at `0x80482e0` is an address to a `link_map` structure and
the `reloc_arg` argument is the index pushed for `puts` at `0x80482e0`.

In our example, `puts` is the only function and is thus at index `0x0`.

Without going into much detail, a `link_map` struct is maintained by `ld` for
all objects, the binary and linked libraries, and contains the important
addresses and state for linking. 

You could consider the `link_map` the linker's internal representation of an
ELF.

### \_dl\_lookup\_symbol\_x

Ultimately, `_dl_fixup` calls the `_dl_lookup_symbol_x` function which uses
`reloc_arg` (`0x0` in our example) as index into the `.rel.plt` section:

```txt
Relocation section '.rel.plt' at offset 0x298 contains 3 entries:
 Offset     Info    Type            Sym.Value  Sym. Name
0804a00c  00000107 R_386_JUMP_SLOT   00000000   puts
0804a010  00000207 R_386_JUMP_SLOT   00000000   __gmon_start__
0804a014  00000307 R_386_JUMP_SLOT   00000000   __libc_start_main
```

From the `.rel.plt`, `_dl_lookup_symbol_x` uses the Info field as an index
into the `.symtab` section:

```txt
Symbol table '.symtab' contains 67 entries:
   Num:    Value  Size Type    Bind   Vis      Ndx Name
    52: 00000000     0 FUNC    GLOBAL DEFAULT  UND puts@@GLIBC_2.0
```

Finally, `_dl_lookup_symbol_x` uses the Name field, `puts@GLIBC_2.0`, to
perform a scoped lookup of the function on other objects.

What is really interesting is how it actually searches other objects. It would
be very inefficient to perform a linear search of all other objects `.dynsym`
tables. 

Actually, `ld` uses the `.hash` and `.gnu.hash` sections, which store hashes of
the symbol names.

There are two implementations the SYSV hash and the newer GNU method.

GNU hashing uses a bucketed bloom filter, you may have noticed in the readelf
output:

```txt
readelf -a /lib/i386-linux-gnu/libc.so.6

Histogram for `.gnu.hash' bucket list length (total of 1011 buckets):
 Length  Number     % of total  Coverage
      0  100        (  9.9%)
      1  219        ( 21.7%)      9.2%
      2  260        ( 25.7%)     31.0%
      3  211        ( 20.9%)     57.6%
      4  133        ( 13.2%)     80.0%
      5  59         (  5.8%)     92.4%
      6  22         (  2.2%)     97.9%
      7  6          (  0.6%)     99.7%
      8  1          (  0.1%)    100.0%
```

Find out more in this article:
https://blogs.oracle.com/ali/entry/gnu_hash_elf_sections.


