---
layout: post
title: "reduce jpg size"
date: 2013-02-19 22:34:56
tags: ["imagemagick"]
---

```sh
convert original.jpeg -define jpeg:extent=2048kb output.jpg
```

<http://stackoverflow.com/questions/6917219/imagemagick-scale-jpeg-image-with-a-maximum-file-size>
