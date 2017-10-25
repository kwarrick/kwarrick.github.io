---
title: "fix slow ssh logins v2"
date: 2014-03-17 
tags: ["ssh", "linux"]
---

Newer versions of OpenSSH attempt to reverse resolve client IP addresses. This can cause slow ssh connections if the client IP does not reverse resolve as the DNS request will be attempted multiple times and timeout each time.

To fix the problem, disable it in your `/etc/ssh/sshd_config`:

```
  UseDNS no
```
