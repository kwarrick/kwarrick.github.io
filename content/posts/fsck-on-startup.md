---
title: "fsck on startup"
date: 2011-12-21 20:07:36
tags: ["fsck"]
---

Easiest way I've seen to force `fsck` on the next boot:

```bash
 sudo touch /forcefsck
```

That easy, thanks cyberciti.biz.

http://www.cyberciti.biz/faq/linux-force-fsck-on-the-next-reboot-or-boot-sequence/
