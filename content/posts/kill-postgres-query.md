---
title: "kill postgres query"
date: 2013-10-29 20:39:45
tags: ["postgres"]
---

<p>
Find the PID of the query from a system utility like top or htop, or from the "pg_catalog.pg_stat_activity" table.

```
sudo -u postgres psql 
```

```
postgres=# SELECT pg_cancel_backend(28710);
```

</p>
