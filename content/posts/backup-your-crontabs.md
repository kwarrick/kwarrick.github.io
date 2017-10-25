---
title: "backup your crontabs"
date: 2013-05-15 05:20:46
tags: cron backup
---

<p>
Don't forget to backup your crontabs when you are reinstalling!

{% highlight bash %}
# list crontab for your user
crontab -l
{% endhighlight %}
</p>

<p>
If you have multiple users, you grab the files:

{% highlight bash %}
cp -r /var/spool/cron/crontabs /media/backup/folder/path/
{% endhighlight %}
</p>
