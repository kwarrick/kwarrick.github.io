---
title: "x days ago in python"
date: 2012-10-23 23:36:44
tags: ["python", "date"]
---

<p>
```

import datetime

today = datetime.date.today()

yesterday = today - datetime.timedelta(1)

x = 5
x_days_ago = today - datetime.timedelta(x)

```
</p>

