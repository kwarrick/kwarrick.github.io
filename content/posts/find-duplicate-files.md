---
title: "find duplicate files"
date: 2014-06-19
tags: ["linux"]
---

Find duplicate files first by file size and then MD5 sum, with a progress bar:

```bash
find -not -empty -type f -printf "%s\n" \
  | sort -rn \
  | uniq -d \
  | xargs -I{} -n1 find -type f -size {}c -print0 \
  | tee \
  | pv --line-mode --size $(find . -type f | wc -l) \
  | xargs -0 md5sum \
  | sort \
  | uniq -w32 --all-repeated=separate \
  | tee /tmp/duplicates
```


[http://www.commandlinefu.com/commands/view/3555/find-duplicate-files-based-on-size-first-then-md5-hash](http://www.commandlinefu.com/commands/view/3555/find-duplicate-files-based-on-size-first-then-md5-hash)


