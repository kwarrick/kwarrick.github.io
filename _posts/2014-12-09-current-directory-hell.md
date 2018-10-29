---
layout: post
title: "current directory hell"
date: 2014-12-09
tags: ["shell", "bash", "zsh", "style"]
---

One of the most frustrating and frequent scripting errors I make is in 
mistaking my current directory and improperly referencing another file or 
directory.

I have adopted a scope-like block style for changing directories using
`pushd` and `popd`:

```bash
#!/bin/bash

mkdir lib/gdb
pushd lib/gdb
  sudo apt-get build-dep -y gdb
  sudo apt-get install -y libpython2.7 libpython2.7-dev

  apt-get source gdb

  pushd gdb-?.?.?
    ./configure \
      --with-python=$VIRTUAL_ENV/bin/python \
      --prefix=$VIRTUAL_ENV
    make
    make install
  popd
popd
```


