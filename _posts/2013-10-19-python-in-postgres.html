---
layout: post
title: "python in postgres"
date: 2013-10-19 00:31:15
tags: python postgres
---

<p>
Installing and adding Python to your PostgreSQL database in Ubuntu:

{% highlight bash %}
sudo apt-get install postgresql-plpython-9.1
sudo -u postgres psql -c 'CREATE EXTENSION plpythonu;' dbname
{% endhighlight %}
</p>

<p>
Check that it was installed:
{% highlight bash %}
psql -c '\dL' dbname
       List of languages
   Name    |  Owner   | Trusted 
-----------+----------+---------
 plpgsql   | postgres | t 
 plpythonu | postgres | f 
(2 rows)
{% endhighlight %}
</p>

<p>
Keep in mind that Python is an 'untrusted' language meaning that functions written in PL/Pythonu execute in an administrative context. For this reason, Python functions can only be created by an administrator and special care should be taken that nothing damaging or nefarious can be done with the function by non administrator users of the database.
</p>

<p>
Now, you can declare a function in Python as an administrator. 

{% highlight sql %}
CREATE FUNCTION shuffle(arg text) RETURNS text AS
$$
  import random
  a = list(arg)
  random.shuffle(a)
  return ''.join(a)
$$
LANGUAGE plpythonu;
{% endhighlight %}

{% highlight sql %}
=> SELECT shuffle('foo bar');
 shuffle 
---------
 oa forb
(1 row)
{% endhighlight %}

</p>
