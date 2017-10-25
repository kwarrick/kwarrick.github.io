---
title: "IP masquerading"
date: 2012-01-11 19:31:51
tags: ["vm", "virtualbox", "subnet", "ip", "masquerading", "iptables"]
---

Not long ago, I found myself in need of a subnet of virtual machines. Using
VirtualBox I configured a number of VMs with <code>Internal Network</code>
interfaces and a gateway VM with two interfaces - one <code>Internal Network</code>
interface and one <code>NAT</code> interface.

It isn't the first time I needed to configure a Linux box as a gateway, but I always forget how to configure IP masquerading. So, needless to say I'm taking note of it here:

<b>1. Configure the external interface:</b>
```bash
  $ ifconfig eth0 10.0.0.2 netmask 255.255.255.0 
  $ echo "nameserver 8.8.8.8" > /etc/resolv.conf
 
  # or for dhcp
  $ dhclient eth0
```

<b>2. Configure the internal interface:</b>
```bash
  $ ifconfig eth1 192.168.0.1 netmask 255.255.255.0
```

<b>3. Configure iptables:</b>
```bash
  $ iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
```

<b>4. Enable ip_forwarding:</b>
```bash
  $ echo 1 > /proc/sys/net/ipv4/ip_forward
```

<b> or configure it in <code>/etc/sysctl.conf</code>, 
   which will persist after reboot.</b>

Obviously, depending on your distro, your interface configuration, etcetera,
etcetera, you will have to adjust.
