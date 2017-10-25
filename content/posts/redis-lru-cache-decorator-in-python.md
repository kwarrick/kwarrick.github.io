---
title: "redis lru cache decorator in python"
date: 2012-12-09 22:54:30
tags: ["python", "redis", "lru"]
---

<p>
Python 3 offers a brilliant decorator that adds a Least Recently Used (LRU) cache to any function:

```
@lru_cache(maxsize=20)
def get_pep(num):
    'Retrieve text of a Python Enhancement Proposal'
    resource = 'http://www.python.org/dev/peps/pep-%04d/' % num
    try:
        with urllib.request.urlopen(resource) as s:
            return s.read()
    except urllib.error.HTTPError:
        return 'Not Found'

>>> for n in 8, 290, 308, 320, 8, 218, 320, 279, 289, 320, 9991:
...     pep = get_pep(n)
...     print(n, len(pep))

>>> print(get_pep.cache_info())
CacheInfo(hits=3, misses=8, maxsize=20, currsize=8)
```
</p>

<p>
Functools has been <a href="https://github.com/MiCHiLU/python-functools32">back-ported</a> to Python 2.7; however, I was interested in creating a similar LRU cache decorator but leveraging a Redis server so that the cache can be shared across several worker programs. The cache will be semi-persistant allowing workers to restart as necessary. 
<p>

<p>
It turned out to only take 50 lines of Python, so I am sharing it: <a href="https://gist.github.com/4247343">https://gist.github.com/4247343</a>
</p>

<p>
<a href="http://docs.python.org/3/library/functools.html#functools.lru_cache">http://docs.python.org/3/library/functools.html#functools.lru_cache</a>
</p>
