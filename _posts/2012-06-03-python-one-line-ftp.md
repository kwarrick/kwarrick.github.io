---
layout: post
title: "python one-line ftp"
date: 2012-06-03 04:50:06
tags: ["python", "twisted", "http", "twistd", "oneliner", "one-liner"]
---

So, while looking for a quick and easy FTP server analog to this popular Python trick:

```bash
$ python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000 ...
```

I found a [Stackoverflow][1] post that shows Twisted has a one line FTP and
more:

```bash
$ twistd -n ftp
```

The `-n` option is for "nodaemon"; don't daemonize and run in the foreground.

Just looking at the options for `twistd`, it looks like you can also do
port-forwarding, SOCKS tunneling, a HTTP server, a DNS server, and more.

http://twistedmatrix.com/trac/
[1]: http://stackoverflow.com/questions/4994638/one-line-ftp-server-in-python
