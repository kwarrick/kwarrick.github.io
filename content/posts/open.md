---
title: "open"
date: 2012-02-26 21:45:55
tags: ["open", "mac", "osx", "linux"]
---

Mac OS X has an `open` command-line utility that I use
extensively from the terminal. If ever I need to open a directory or any file
with its default application, I just simply type `open file` and
there is no need to open Finder and traverse to the directory.

```bash
# open a finder window in current directory
$ open . 

$ open http://google.com

$ open image.jpg
```

In Linux, you can get the same functionality with `gnome-open`:

```bash
# ~/.bash_profile
$ alias open=gnome-open

$ open http://segv.me

# open nautilus window in current directory
$ open .
```

```
man open
man gnome-open
```
