---
layout: post
title: "postgres index usage"
date: 2013-09-09 03:16:45
tags: ["postgres"]
---

Awesome article on [understanding postgres performance][1] had this little nugget, which gives you the tables in your database with the percentage of time they use an index:

```sql
SELECT 
  relname, 
  100 * idx_scan / (seq_scan + idx_scan) percent_of_times_index_used, 
  n_live_tup rows_in_table
FROM 
  pg_stat_user_tables
WHERE 
  seq_scan + idx_scan > 0 
ORDER BY 
  n_live_tup DESC;
  ```
 
[1]: http://www.craigkerstiens.com/2012/10/01/understanding-postgres-performance/
