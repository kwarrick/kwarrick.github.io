---
layout: post
title: "remap capslock in linux"
date: 2015-04-06
tags: linux
---

Here is how I map `CAPSLOCK` + `H/J/K/L` to the arrow keys in Linux:

Remap the `CAPSLOCK` key with `xmodmap`:   

```sh
cat >> ~/.xmodmaprc <<EOF
clear Lock
keycode 66 = ISO_Level3_Shift
EOF
```

Modify the `xkb` bindings:

```sh
cp /usr/share/X11/xkb/symbols/us ~/xkb-symbols-us.backup

sudo sed -r '0,/h,\s+H/s//h, H, Left, Left/' /usr/share/X11/xkb/symbols/us 
sudo sed -r '0,/j,\s+J/s//j, J, Down, Down/' /usr/share/X11/xkb/symbols/us 
sudo sed -r '0,/k,\s+K/s//k, K, Up, Up/' /usr/share/X11/xkb/symbols/us 
sudo sed -r '0,/l,\s+L/s//l, L, Right, Right/' /usr/share/X11/xkb/symbols/us 
```

Clean the cache:

```sh
sudo rm /var/lib/xkb/*.xkm
```

[http://superuser.com/questions/96299/mapping-superhjkl-to-arrow-keys-under-x](http://superuser.com/questions/96299/mapping-superhjkl-to-arrow-keys-under-x)
