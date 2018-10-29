---
layout: post
title: "comments in zsh"
date: 2013-02-07 17:39:12
tags: ["zsh"]
---

By default, comments are disabled in zsh's interactive interpreter:
```sh
[warrick@maca ~] % # comment
zsh: bad pattern: #
```

I find this to be an incredibly annoying default, but here is how you enable
such comments:
```sh
[warrick@maca ~] % setopt interactivecomments
```
