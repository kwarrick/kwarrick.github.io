---
title: "Recycle Arguments"
date: 2011-12-09 02:36:11
tags: ["bash", "arguments"]
---

Ok, so last post was a bit heavy. How about some more bash. So, thanks to sudo
the `!!` word designator has become very popular:


```bash
$ apache2ctl restart
Permission denied: ...

$ sudo !!
sudo apache2ctl restart
```

Very cool, but you can also reuse arguments with the `!!` word designator:

```bash
$ cp /home/user/some/really/long/path /home/user/foo

$ ls -lha !!:1
ls -lha /home/user/some/really/long/path
```

So this `!!:n` lets you grab the nth argument, which is cool. <br /><br />

You can even select ranges:


```bash
$ cp /home/user/some/really/long/path /home/user/foo

$ md5sum !!:1-2
md5sum /home/user/some/really/long/path /home/user/foo
```

You can also use the asterisk to select all the arguments, but not the command:

```bash
$ ls /home /

$ ls -l !!:*
ls -l /home /
```

Anyways, there are quite a few other options so check out the docs:   
http://www.gnu.org/software/bash/manual/bashref.html#Word-Designators
