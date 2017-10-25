---
title: "reduce jpg size"
date: 2013-02-19 22:34:56
tags: ["imagemagick"]
---

<p>
{% highlight bash %}
convert original.jpeg -define jpeg:extent=2048kb output.jpg
{% endhighlight %}

<a href="http://stackoverflow.com/questions/6917219/imagemagick-scale-jpeg-image-with-a-maximum-file-size">http://stackoverflow.com/questions/6917219/imagemagick-scale-jpeg-image-with-a-maximum-file-size</a>
</p>
