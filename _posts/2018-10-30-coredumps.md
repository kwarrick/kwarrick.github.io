---
layout: post
title: "core dump"
date: 2018-10-30
---

When a program crashes, certain signals may cause the OS to produce a
`core dump file`, a file that contains the process's memory at the time of
termination.

By default, Ubuntu actually passes the core dump to a python script called
[apport][1].

```shell
vagrant@ubuntu-xenial:~$ cat /proc/sys/kernel/core_pattern
|/usr/share/apport/apport %p %s %c %d %P
```

Although it is disabled by default, I don't really care to have apport handle
my core.


```shell
# /etc/sysctl.conf
$ sysctl -w kernel.core_pattern=/tmp/core.%u.%e.%p
```

See the available patterns for the file name in `man core`.

#### Resource limits

Still, even if you set a pattern for your filename, your core may not be
written if the size exceeds the resource limits imposed by your system or
shell.

You can control the maximum size of your core dump with the `-c` option of the
`ulimit` shell builtin:

```shell
$ ulimit -c unlimited
```

#### Memory segments

Now if you pop open `gdb` and go to work on your core you may think that the
entire process was written to the core file, but it probably wasn't.

By default, not all segments mapped for a process are written to the core dump
file. You'll need to modify `/proc/PID/coredump_filter` to control which
memory segments are written to disk.

Child processes inherit the parents `coredump_filter` so you can also control
the filter in the parent shell:

```shell
$ echo 0x7 > /proc/self/coredump_filter
$ ./buggy_program
```

__Keep in mind these files can be pretty big.__

[1]: https://wiki.ubuntu.com/Apport
