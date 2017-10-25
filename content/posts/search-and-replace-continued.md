---
title: "search and replace continued"
date: 2012-01-27 02:49:27
tags: ["search", "replace", "bash", "arguments"]
---

As an extension of <a href="http://segv.me/posts/9">Recycling Arguments</a> and the previous post on search and replace using Sed, I would like to show two Bash features for search in replace in previous commands:


Replace the first instance of foo in the previous command with bar:
```
$ cat foo
$ ^foo^bar
cat bar
```

OR

```
$ cat foo
$ !!:s/foo/bar
```


As you can see the second example uses the word designator with a syntax similar to that of Sed. However, one difference is that if you'd like to do a 'global' replace, you'll need to use the following syntax:

```
$ cat /home/foo/a /home/foo/b
$ !!:gs/foo/bar
```

