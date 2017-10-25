---
title: "backup your crontabs"
date: 2013-05-15 05:20:46
tags: ["cron", "backup"]
---

Don't forget to backup your crontabs when you are reinstalling!

```
# list crontab for your user
crontab -l
```

If you have multiple users, you grab the files:

```
cp -r /var/spool/cron/crontabs /media/backup/folder/path/
```
