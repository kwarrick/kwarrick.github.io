---
title: "postgres histogram"
date: 2014-05-22
tags: postgres
---

A huge thank you for this little gem &mdash; a quick and dirty histogram in PostgreSQL:

{% highlight sql %}
WITH 
stats AS (
  SELECT 
      min(__value__)
    , max(__value__)
  FROM __table__
), 
histogram AS (
  SELECT
    WIDTH_BUCKET(__value__, min, max, 9)  --<<<<<
    AS bucket
  , MIN(__value__)
  , MAX(__value__)
  , COUNT(*) 
    AS freq
  FROM __table__
  CROSS JOIN stats
  GROUP BY bucket
  ORDER BY bucket
)
SELECT 
    bucket
  , min
  , max
  , freq
  , REPEAT('*', (freq::FLOAT / max(freq) over() * 30)::INT) 
    AS bar
FROM histogram
;
{% endhighlight %}

```
 bucket |  min  |  max  |  freq  |              bar
--------+-------+-------+--------+--------------------------------
      1 |     0 |  8517 | 294826 | ******************************
      2 |  8577 | 16400 |  73992 | ********
      3 | 17563 | 25200 |   8202 | *
      4 | 26219 | 33651 |    853 |
      5 | 34560 | 42600 |   1312 |
      6 | 43200 | 51063 |   2592 |
      7 | 53104 | 59037 |      9 |
      8 | 60000 | 68400 |     17 |
      9 | 68577 | 76833 |     54 |
     10 | 77060 | 85499 |     60 |
```

Visualize the frequency distribution of some `__value__` in your `__table__`, and adjust the number of buckets to increase the resolution.

[http://tapoueh.org/blog/2014/02/21-PostgreSQL-histogram.html](http://tapoueh.org/blog/2014/02/21-PostgreSQL-histogram.html)
