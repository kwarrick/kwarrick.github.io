---
title: "SSH config"
date: 2011-12-12 02:04:15
tags: ["ssh"]
---

OpenSSH allows you to add configuration directives to <span class="mono">~/.ssh/config</span> with aliases for long hostnames or IP addresses:  

```bash
cat << EOF >> ~/.ssh/config
Host segv                     # desired alias
    HostName segv.me          # ip address works too
    Port 22
    User foo
    LocalForward localhost:57005 192.168.0.2:57005
    IdentityFile ~/.ssh/auxiliary_rsa
EOF
```

This solution is better than using <code>/etc/hosts</code> for obvious reasons. There are a great number of options that allow you choose everything from username to encryption cipher preferences on a host-by-host basis.
<code>man ssh_config</<code>

I've added a nasty little bashism too, as a bonus.
<a href="http://tldp.org/LDP/abs/html/here-docs.html">http://tldp.org/LDP/abs/html/here-docs.html</a>
