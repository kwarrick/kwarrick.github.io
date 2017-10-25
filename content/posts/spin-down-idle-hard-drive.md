---
title: "spin down idle hard drive"
date: 2014-05-23
tags: ["linux"]
---

I noticed that my external hard drive, which uses a cheap SATA to USB enclosure, was constantly spinning, even when I hadn't accessed it in hours.

I decided to lookup how to coax the drive to spin down.

A little searching showed that you can check a drive's status and set its idle timeout policy with the `hdparm` command. 

```
$ sudo hdparm -C /dev/sdb
/dev/sdb:
 drive state is:  active/idle
```

Setting the timeout is a little odd, the value `120` means 10 minutes. See the man page for details.

```
$ sudo hdparm -S 120 /dev/sdb 
/dev/sda:
 setting standby to 120 (10 minutes)
```

I also read that some drives don't obey hdparm, so you may want to checkout `hd-idle` if your drive won't idle.


