---
layout: post
title: "zsh automatically report time stats for long processes"
date: 2013-03-24 05:16:28
tags: ["zsh", "time"]
---

```sh
export REPORTTIME=60
```

Setting the variable `REPORTTIME` to a value greater
than zero will make ZSH automatically print execution times after the command
finishes.

> If nonzero, commands whose combined user and system execution times (measured
> in seconds) are greater than this value have timing statistics printed for
> them.

http://zsh.sourceforge.net/Doc/Release/Parameters.html#index-REPORTTIME
