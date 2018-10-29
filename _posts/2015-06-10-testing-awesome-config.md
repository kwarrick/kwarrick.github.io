---
layout: post
title: "testing awesome config"
date: 2015-06-10
---

Test your awesome wm config in a nested X:

```bash
Xephyr :1 -ac -br -noreset -screen 1152x720 &
DISPLAY=:1.0 awesome -c ~/.config/awesome/rc.lua
```

https://wiki.archlinux.org/index.php/Awesome
