---
title: "map caps lock to escape in linux"
date: 2014-02-21 21:05:26
tags: ["linux", "x11"]
---

</p>
```
xmodmap -e 'clear Lock' -e 'keycode 0x42 = Escape'
```
