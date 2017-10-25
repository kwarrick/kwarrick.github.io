---
title: "bash tcp connections"
date: 2012-01-03 21:32:07
tags: ["bash", "tcp", "sockets"]
---

Bash, if compiled accordingly, has pseudo-device files that allow you to open TCP connections:

```
 $ # /dev/tcp/$host/$port
 $ echo foo > /dev/tcp/127.0.0.1/57005
```
Of course, <code>nc</code> is a more functional alternative, but this is an interesting bash feature nonetheless.

<a href="http://tldp.org/LDP/abs/html/devref1.html">http://tldp.org/LDP/abs/html/devref1.html</a><p>
