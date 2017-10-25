---
title: "postgres dblink"
date: 2013-12-04 20:05:03
tags: ["postgres"]
---

Connect to and query a remote PostgreSQL database from a local database.

First install the dblink extension and enable it for your database, e.g.
```bash
sudo apt-get install postgresql-contrib-9.1
sudo -u postgres psql -c 'CREATE EXTENSION dblink;' foo
```

Then connect to the remote database with the dblink_connect function:
```bash
SELECT 
dblink_connect('hostaddr=10.0.1.1 port=5432 dbname=foo user=bar password=baz');
```

http://www.postgresql.org/docs/9.1/static/contrib-dblink-connect.html
