---
layout: post
title: "piping to ruby scripts"
date: 2013-10-16 23:33:52
tags: ["linux", "pipes", "ruby"]
---

Ruby, instead of exiting when it receives a SIGPIPE, throws an exception
Errno:EPIPE which usually results in a stack trace.

```txt
./foo.rb:8:in `write': Broken pipe - <STDOUT> (Errno::EPIPE)
```

Here is the idiomatic one-line to simply exit when your script gets a SIGPIPE:
```ruby
trap('PIPE', 'EXIT')
```
