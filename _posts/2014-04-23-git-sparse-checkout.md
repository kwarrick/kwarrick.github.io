---
layout: post
title: "git sparse checkout"
date: 2014-04-23
tags: ["git"]
---

One thing I missed after switching to `git` from `svn` was the ability to
checkout a single directory.

Well, it seems that the ability to partially checkout a repository was added to
git in February of 2012, and I am way behind.

Here is how you perform a **sparse checkout**:

```bash
# Initialize
git init [repo]
cd [repo]

# Fetch 
git remote add -f origin [url]

# Configure
git config core.sparsecheckout true
echo "path/to/dir" >> .git/info/sparse-checkout
echo "path/to/some/file" >> .git/info/sparse-checkout

# Checkout
git pull origin master
```

If you modify `.git/info/sparse-checkout`, you will want to run the following
to update your working directory:

```bash
git read-tree -m -u HEAD
```



http://git-scm.com/docs/git-read-tree   
http://stackoverflow.com/questions/600079/is-there-any-way-to-clone-a-git-repositorys-sub-directory-only
