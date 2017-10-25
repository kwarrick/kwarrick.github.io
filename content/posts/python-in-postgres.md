---
title: "python in postgres"
date: 2013-10-19 00:31:15
tags: ["python", "postgres"]
---

Installing and adding Python to your PostgreSQL database in Ubuntu:
```bash
sudo apt-get install postgresql-plpython-9.1
sudo -u postgres psql -c 'CREATE EXTENSION plpythonu;' dbname
```

Check that it was installed:
```psql
psql -c '\dL' dbname
       List of languages
   Name    |  Owner   | Trusted 
-----------+----------+---------
 plpgsql   | postgres | t 
 plpythonu | postgres | f 
(2 rows)
```

Keep in mind that Python is an 'untrusted' language meaning that functions
written in PL/Pythonu execute in an administrative context. For this reason,
Python functions can only be created by an administrator and special care
should be taken that nothing damaging or nefarious can be done with the
function by non administrator users of the database.

Now, you can declare a function in Python as an administrator. 
```sql
CREATE FUNCTION shuffle(arg text) RETURNS text AS
$$
  import random
  a = list(arg)
  random.shuffle(a)
  return ''.join(a)
$$
LANGUAGE plpythonu;
```

```psql
=> SELECT shuffle('foo bar');
 shuffle 
---------
 oa forb
(1 row)
```
