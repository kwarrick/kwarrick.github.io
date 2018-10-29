---
layout: post
title: "quick basic auth"
date: 2012-01-28 01:56:01
tags: ["http", "auth", "curl", "wget"]
---

I often go for the `man` when I wget or curl something from a site with basic
auth and completely forget I can do this:

```bash
curl http://USER:PASSWORD@segv.me/some/basic/auth/protected/file
```

Just a little faster on the draw.
