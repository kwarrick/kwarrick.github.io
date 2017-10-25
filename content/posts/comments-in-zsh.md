---
title: "comments in zsh"
date: 2013-02-07 17:39:12
tags: ["zsh"]
---

<p>
By default, comments are disabled in zsh's interactive interpreter:

```
[warrick@maca ~] % # comment
zsh: bad pattern: #
```
</p>

<p>
I find this to be an incredibly annoying default, but here is how you enable such comments:

```
[warrick@maca ~] % setopt interactivecomments
```
</p>
