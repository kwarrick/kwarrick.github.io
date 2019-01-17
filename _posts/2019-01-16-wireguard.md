---
layout: post
title: "wireguard"
date: 2019-01-16
---

This is just a reflection on the terrible journey from port forwarding, to
one-off tunnels, and finally an actual VPN.  See [Part 2][4] for the TLDR on a
simple Wireguard config.   

----------------

You want to access your machine at home. Maybe you want to host something. Your
box is behind a NAT of course, so you open a port on your router.

Well, you don't have a static IP at home. So, you check into dynamic DNS. Your
router might even support some services. You don't want to pay for it though,
and the free ones are all pretty sketchy looking.

Okay, so this sucks, I'll just get a VPS. They are affordable now - not a lot
of power, not a lot of space, but really affordable.

Oh neat, my VPS provider has an API. Now I can write my own script for dynamic
DNS.  Boom, cron to the rescue. Shoot, I just forwarded the one port. That's
okay I can just forward more ports over SSH.

A few dozen `ssh -L` commands later you don't even have to check the man for
the order of the bind and host ports anymore. A few thousand more and you start
to be much less enthusiastic about this "solution".

You might start using `autossh` or `sshuttle` before you realize, this is
insane. SSH was not meant for this. **"Why don't I just setup an actual VPN?"**

Time to eat some alphabet soup - PPTP, IPSEC, L2TP, IKEv2.  Right, so OpenVPN.
Let's configure OpenVPN. _Ay dios mio_. Configuring OpenVPN is not so fun.
Using `openssl` is really not fun, either.

Then you finally figure out that you do not want to route all of your traffic
through your VPS; it is just slow enough to be noticeable and annoying. I just
want some sort of "peer-to-peer" VPN.

OpenVPN supports it, but what alternatives are there. [Tinc VPN][1] looks cool.
That CVE list does not. Alright, what about [n2n][2]. "Super nodes" and "edge
nodes" make sense, but not a ton of adoption going on.

Any of this sound familiar?

Queue the orchestra.  After over a decade of this, there is finally an elegant
VPN solution &mdash; [Wireguard][3]!

It is so popular that it will probably be included in the Linux kernel this
year[^1]. Here is what Linus has to say about it[^2]:

> Btw, on an unrelated issue: I see that Jason actually made the pull request
> to have wireguard included in the kernel. 
>
> Can I just once again state my love for it and hope it gets merged soon? Maybe
> the code isn't perfect, but I've skimmed it, and compared to the horrors that
> are OpenVPN and IPSec, it's a work of art.


[1]: <https://www.tinc-vpn.org/>
[2]: <https://github.com/ntop/n2n>
[3]: <https://www.wireguard.com/>
[4]: <{{ "2019/01/16/simple-wireguard-config.html" | relative_url }}>

[^1]: <https://www.phoronix.com/scan.php?page=news_item&px=WireGuard-Linux-V2>
[^2]: <https://www.phoronix.com/scan.php?page=news_item&px=Linus-Likes-WireGuard>
