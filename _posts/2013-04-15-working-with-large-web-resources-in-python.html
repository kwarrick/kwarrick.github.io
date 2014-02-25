---
layout: post
title: "working with large web resources in python"
date: 2013-04-15 18:52:46
tags: python gzip urllib2 shutil
---

<p>
Saving the file to disk.<sup>1</sup>
{% highlight python %}
import urllib2
import shutil

req = urllib2.urlopen(url)
with open(filename, 'wb') as f:
  shutil.copyfileobj(req, f)
{% endhighlight %}
</p>

<p>
Reading GZIP compressed CSV files:<sup>2</sup>

{% highlight python %}
import csv
import gzip

with gzip.open(filename) as f:
  reader = csv.reader(f, quoting=csv.QUOTE_NONE)
  header = csv.next()
  for row in reader:
    entry = dict(zip(header, row))
    # ...
{% endhighlight %}
</p>

<p>
<ol>
<li>
<a href="http://stackoverflow.com/questions/9252812/using-csvreader-against-a-gzipped-file-in-python">http://stackoverflow.com/questions/9252812/using-csvreader-against-a-gzipped-file-in-python</a>
</li>
<li>
<a href="http://stackoverflow.com/questions/1517616/stream-large-binary-files-with-urllib2-to-file">http://stackoverflow.com/questions/1517616/stream-large-binary-files-with-urllib2-to-file</a>
</li>
</ol>
</p>
