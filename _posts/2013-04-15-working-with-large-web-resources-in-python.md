---
layout: post
title: "working with large web resources in python"
date: 2013-04-15 18:52:46
tags: ["python", "gzip", "urllib2", "shutil"]
---

Saving the file to disk.[^1]
```python
import urllib2
import shutil

req = urllib2.urlopen(url)
with open(filename, 'wb') as f:
  shutil.copyfileobj(req, f)
```

Reading GZIP compressed CSV files:[^2]
```python
import csv
import gzip

with gzip.open(filename) as f:
  reader = csv.reader(f, quoting=csv.QUOTE_NONE)
  header = csv.next()
  for row in reader:
    entry = dict(zip(header, row))
    # ...
```

[^1]:http://stackoverflow.com/questions/9252812/using-csvreader-against-a-gzipped-file-in-python
[^2]:http://stackoverflow.com/questions/1517616/stream-large-binary-files-with-urllib2-to-file
