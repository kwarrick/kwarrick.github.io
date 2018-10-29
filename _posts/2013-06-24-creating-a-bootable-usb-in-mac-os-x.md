---
layout: post
title: "creating a bootable usb in mac os x"
date: 2013-06-24 18:03:52
tags: ["mac", "osx", "liveusb", "bootable"]
---

1) Convert ISO to IMG.
```sh
hdiutil convert -format UDRW -o /path/to/output.img /path/to/input.iso
```

2) Unmount drive.
```sh
diskutil unmountDisk /dev/diskN
```

3) Copy IMG to drive.
```sh
sudo dd if=/path/to/output.img of=/dev/rdiskN bs=1m
```

4) Eject drive.
```sh
diskutil eject /dev/diskN
```
