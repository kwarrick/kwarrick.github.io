---
layout: post
title: "trap to cleanup"
date: 2014-01-20 22:48:10
tags: ["bash"]
---

```bash

function cleanup() {
 rm -v $TEMPFILE
}

# catch HUP, INT, QUIT, and TERM
trap cleanup 1 2 3 15

```
