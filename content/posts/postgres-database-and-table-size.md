---
layout: post
title: "postgres database and table size"
date: 2013-06-05 23:54:58
tags: postgres
---

<p>
{% highlight sql %}
SELECT pg_size_pretty(pg_database_size('foo_db'));
SELECT pg_size_pretty(pg_total_relation_size('bar_table'));
{% endhighlight %}
</p>
