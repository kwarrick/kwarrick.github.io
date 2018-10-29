---
layout: post
title: "partial uniq using a lru cache"
date: 2014-04-02
tags: ["python", "linux", "go"]
---

Recently, I was faced with the challenge of removing duplicate lines from a
number of large data files.

Typically, I use a combination or `sort` and `uniq` or just `sort -u`, but in
this circumstance many duplicate lines were close together. 

I found that, first, partially filtering duplicates by using a LRU cache to
keep track of and omit recently seen lines doubled the speed.

```python
#!/usr/bin/env python
# file: lru-uniq.py
import fileinput
from repoze.lru import LRUCache

size = 10000
cache = LRUCache(size)
for line in fileinput.input():
  if not cache.get(line):
    print line,
  cache.put(line, True)
```

```bash
$ time sort ns | uniq | wc -l
  936442
real	1m58.768s

$ time ./lru-uniq.py ns | sort | uniq | wc -l
  936442
real	0m55.236s
```

I wanted to speed it up a little more, and it turns out that although I have
never written a program in Go before it was the fastest way to write a compiled
version. 

So, here it is, and I'm sure it is terrible Go.

```go
package main

import (
  "os"
  "fmt"
  "bufio"
  "github.com/golang/groupcache/lru"
)

func main() {
  cache := lru.New(10000)
  stdin := bufio.NewReader(os.Stdin)
  for {
    line, err := stdin.ReadString('\n')
    if err != nil {
      break
    }
    _, hit := cache.Get(line)
    if !hit {
      fmt.Print(line)
    }
    cache.Add(line, 1) 
  }
}
```

```bash
$ time ./lru-uniq < ns | sort | uniq | wc -l
  936442
real	0m35.218s
```

