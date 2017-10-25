---
title: "open"
date: 2012-02-26 21:45:55
tags: ["open", "mac", "osx", "linux"]
---

<p>
Mac OS X has an <span class="mono">open</span> command-line utility that I use extensively from the terminal. If ever I need to open a directory or any file with its default application, I just simply type <span>open file</span> and there is no need to open Finder and traverse to the directory.

```
# open a finder window in current directory
$ open . 

$ open http://google.com

$ open image.jpg
```
</p>

<p>
In Linux, you can get the same functionality with <span class="mono">gnome-open</span>:

```
# ~/.bash_profile
$ alias open=gnome-open

$ open http://segv.me

# open nautilus window in current directory
$ open .
```
</p>

<p>
man open<br />
man gnome-open
</p>
