---
layout: post
title: "vim reminders"
date: 2013-10-01 03:56:18
tags: ["vim"]
---

I always trounce my yank buffer when I delete lines. Don't forget that
registers 0-9 are a history of the past 10 **yank buffers**.

```txt
"0p    ...    "9p
```


Sometimes, when doing a global search and replace, it is convenient to be
**prompted** before replacing each string.

```txt
%s/foo/bar/gc
```
