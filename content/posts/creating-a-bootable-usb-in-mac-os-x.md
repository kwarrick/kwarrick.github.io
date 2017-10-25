---
title: "creating a bootable usb in mac os x"
date: 2013-06-24 18:03:52
tags: ["mac", "osx", "liveusb", "bootable"]
---

<p>
1) Convert ISO to IMG.
```
hdiutil convert -format UDRW -o /path/to/output.img /path/to/input.iso
```
</p>

<p>
2) Unmount drive.
```
diskutil unmountDisk /dev/diskN
```
</p>

<p>
3) Copy IMG to drive.
```
sudo dd if=/path/to/output.img of=/dev/rdiskN bs=1m
```
</p>

<p>
4) Eject drive.
```
diskutil eject /dev/diskN
```
</p>
