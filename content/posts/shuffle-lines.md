---
title: "shuffle lines"
date: 2012-01-13 03:32:24
tags: ["ruby", "argf", "shuffle", "one-liner"]
---

Using Ruby's special stream, **`ARGF`**, shuffling the lines in a file is trivial:

```
$ cat foo.txt | 
ruby -e "puts ARGF.readlines.collect.shuffle rescue Errno::EPIPE"
```
</p>
