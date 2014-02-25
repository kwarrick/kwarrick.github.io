---
layout: post
title: "IP masquerading"
date: 2012-01-11 19:31:51
tags: vm virtualbox subnet ip masquerading iptables
---

</p>
Not long ago, I found myself in need of a subnet of virtual machines. Using VirtualBox I configured a number of VMs with <span class="mono">Internal Network</span> interfaces and a gateway VM with two interfaces - one <span class="mono">Internal Network</span> interface and one <span class="mono">NAT</span> interface.
</p>

<p>
It isn't the first time I needed to configure a Linux box as a gateway, but I always forget how to configure IP masquerading. So, needless to say I'm taking note of it here:
</p>

<p>
<b>1. Configure the external interface:</b>
{% highlight bash %}
  $ ifconfig eth0 10.0.0.2 netmask 255.255.255.0 
  $ echo "nameserver 8.8.8.8" > /etc/resolv.conf
 
  # or for dhcp
  $ dhclient eth0
{% endhighlight %}
</p>

<p>
<b>2. Configure the internal interface:</b>
{% highlight bash %}
  $ ifconfig eth1 192.168.0.1 netmask 255.255.255.0
{% endhighlight %}
</p>

<p>
<b>3. Configure iptables:</b>
{% highlight bash %}
  $ iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
{% endhighlight %}
</p>

<p>
<b>4. Enable ip_forwarding:</b>
{% highlight bash %}
  $ echo 1 > /proc/sys/net/ipv4/ip_forward
{% endhighlight %}
</p>
<p>
<b> or configure it in <span class="mono">/etc/sysctl.conf</span>, 
   which will persist after reboot.</b>
</p>

<p>
Obviously, depending on your distro, your interface configuration, etcetera, etcetera, you will have to adjust.
<p>
