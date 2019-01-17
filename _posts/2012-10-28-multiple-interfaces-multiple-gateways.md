---
layout: post
title: "multiple interfaces, multiple gateways"
date: 2012-10-28 03:17:55
tags: ["iproute2", "linux"]
---

When configuring two interfaces, each on a different subnet, you must add an
additional routing table to isolate interface traffic (e.g. eth0 in, eth0 out).

#### 1. Create a routing table.

In our example we create a table named 'secondary' with identifier 252:
```bash
  $ echo '252 secondary' >> /etc/iproute2/rt_tables
```

If you check out `/etc/iproute2/rt_tables` you'll see there are a few reserved
identifiers one of which is for the primary routing table, main:
```txt
#
# reserved values
#
255	local
254	main
253	default
0	unspec
```

#### 2. Add rules so the Linux kernel will use our new table:
```bash
$ ip rule add to 10.0.1.0/24 table secondary
$ ip rule add from 10.0.1.0/24 table secondary

$ ip rule list  
0:	from all lookup local 
32764:	from 10.0.1.1/24 lookup secondary 
32765:	from all to 10.0.1.0/24 lookup secondary 
32766:	from all lookup main 
32767:	from all lookup default 
```

#### 3. Add an entry to the new routing table mapping the subnet traffic to the correct interface:
```bash
$ ip route add 10.0.1.0/24 dev eth0 src 10.0.1.5 table secondary
```

#### 4. Add an entry specifying the gateway of the subnet:
```bash
$ ip route default via 10.0.1.1 dev eth0 table secondary
```

That is it, now traffic on 10.0.1.0/24 will be routed through the secondary
table, and we can take a look at our routes:
```bash
$ ip route list table secondary
default via 10.0.1.1 dev eth0 
10.0.1.0/24 dev eth0  scope link  src 10.0.1.5
```

In Ubuntu, if you want this configuration to persist across boots you'll need
to add it your your `/etc/network/interfaces` config:
```txt
auto eth0
iface eth0 inet static
address 10.0.1.5
netmask 255.255.255.0
up ip rule add to 10.0.1.0/24 lookup secondary
up ip rule add from 10.0.1.0/24 lookup secondary
up ip route add 10.0.1.0/24 dev eth0 src 10.0.1.5 table secondary
up ip route add default via 10.0.1.1 dev eth0 table secondary
```

<http://kindlund.wordpress.com/2007/11/19/configuring-multiple-default-routes-in-linux/>

