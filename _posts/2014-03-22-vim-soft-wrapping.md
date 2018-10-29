---
layout: post
title: "soft wrapping in vim"
date: 2014-03-22
tags: ["vim"]
---

By default, `wrap` in VIM will break lines in the middle of words.

To enable soft wrapping, wrapping without breaking words, simply enable
`linebreak`. 

```vim
:set wrap
:set linebreak
```

http://vimcasts.org/episodes/soft-wrapping-text/
