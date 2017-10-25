---
title: "map reduce a csv file"
date: 2013-06-08 19:54:19
tags: ["python"]
---

<p>
Map-reduce a CSV files using the incredible UNIX <b>sort</b> utility in just ~24 LOC. 

```
#!/usr/bin/env python
# kwarrick@uga.edu
import csv
import subprocess
from itertools import groupby

def map_reduce_csv(mapper, reducer, key, infile, outfile):
  """ Map-reduce CSV file using UNIX sort utility. """
  sort = subprocess.Popen(
    ['/usr/bin/sort', '-t,'], 
    env={'LC_ALL': 'C'},
    stdin=subprocess.PIPE,
    stdout=subprocess.PIPE,
  )

  # map and sort
  reader = csv.reader(infile)
  writer = csv.writer(sort.stdin, quoting=csv.QUOTE_NONE)

  for row in reader:
    writer.writerows(mapper(row))

  sort.stdin.close()

  # group and reduce
  reader = csv.reader(sort.stdout)
  writer = csv.writer(outfile, quoting=csv.QUOTE_NONE)

  for k, v in groupby(reader, key):
    writer.writerows(reducer(k, list(v)))

  sort.stdout.close()
```
</p>

<p>
```
def identity(infile, outfile):
  """ Example task simply outputs sorted input file. """
  def key(row):
    return row[0]
      
  def mapper(row):
    yield row

  def reducer(key, values):
    for value in values:
      yield value

  map_reduce_csv(mapper, reducer, key, infile, outfile)

if __name__ == '__main__':
  import fileinput
  with open('output.csv', 'w') as outfile:
    identity(fileinput.input(), outfile)

```
</p>
