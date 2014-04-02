---
layout: post
title: "partial uniq using a lru cache"
date: 2014-04-02
tags: python linux
---

Recently, I was faced with the challenge of removing duplicate lines from a number of large data files.

Typically, I use a combination or `sort` and `uniq` or just `sort -u`, but in this circumstance many duplicate lines were close together. 

I found that, first, partially filtering duplicates by using a LRU cache to keep track of and omit recently seen lines doubled the speed.

{% highlight python %}
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
{% endhighlight %}

{% highlight bash %}
$ time sort ns | uniq | wc -l
  936442
real	1m58.768s

$ time ./lru-uniq.py ns | sort | uniq | wc -l
  936442
real	0m55.236s
{% endhighlight %}
