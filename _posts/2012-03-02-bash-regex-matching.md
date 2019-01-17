---
layout: post
title: "bash regex matching"
date: 2012-03-02 02:18:15
tags: ["bash", "regex"]
---

Incredibly, Bash allows you to do regular expression comparisons with the `=~`
operator that Ruby and Perl use:

```bash
$ if [[ "foo" =~ f.* ]]; then
    echo match
  fi
 
match

```

<http://tldp.org/LDP/abs/html/abs-guide.html#REGEXMATCHREF>
