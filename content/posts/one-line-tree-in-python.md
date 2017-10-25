---
title: "one-line tree in python"
date: 2012-08-30 03:05:30
tags: ["python", "tree"]
---

Brilliant:
```python
from collections import defaultdict

def tree(): return defaultdict(tree)
```

https://gist.github.com/2012250
