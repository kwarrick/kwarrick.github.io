---
title: "week of year in python and in postgres"
date: 2012-12-04 22:13:27
tags: ["python", "postgres", "date"]
---

```python
import datetime

today = datetime.date.today()
today.isocalendar()[1]

```

```sql
SELECT EXTRACT(WEEK FROM TIMESTAMP '2012-12-04 20:38:40');
```
