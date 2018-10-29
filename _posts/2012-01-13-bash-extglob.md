---
layout: post
title: "bash extglob"
date: 2012-01-13 03:08:34
tags: ["bash", "extglob", "wildcards", "shopt", "globbing"]
---

Bash has many advanced features that may not be enabled by default, and as an
avid wildcard wielder I find `extglob` especially useful.

I use **inverse pattern matching** most frequently, for example:

```bash
$ ls
bar     baz     foo.jpg     quux
                   ^
$ ls !(*.jpg)
bar  baz  quux
```

To enable `extglob`, simply run:
```bash
$ shopt -s extglob
```


```txt
  If the extglob shell option is enabled using the shopt builtin, several extended  pattern  matching  operators are recognized.  In the following description, a pattern-list is a list of one or more patterns separated by a |.  

Composite patterns may be formed using one or more of the following sub-patterns:

       ?(pattern-list)
              Matches zero or one occurrence of the given pattern               
       *(pattern-list)
              Matches zero or more occurrences of the given patterns
       +(pattern-list)
              Matches one or more occurrences of the given patterns
       @(pattern-list)
              Matches one of the given patterns
       !(pattern-list)
              Matches anything except one of the given patterns
```
