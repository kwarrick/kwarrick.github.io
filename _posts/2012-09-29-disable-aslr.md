---
layout: post
title: "disable aslr"
date: 2012-09-29 17:05:49
tags: ["aslr", "linux"]
---

```bash
sudo sysctl -w kernel.randomize_va_space=0
```
