---
layout: post
title: "simple wireguard config"
date: 2019-01-16
---

The Wireguard docs make you read/think too much. My personal preference is not
to learn all the commands. I just want to create the configuration file and
start the service.


```shell
$ sudo vim /etc/wireguard/wg0.conf
````

```ini
[Interface]
Address = 10.1.1.1/24
ListenPort = 51820
PrivateKey = <PRIVATE_KEY>

[Peer]
PublicKey = <PEER_PUBLIC_KEY>
AllowedIPs = 10.1.1.2/32
# Endpoint = <HOST>:51820
# PersistentKeepalive = 30
```

```shell
$ sudo systemctl start wg-quick@wg0.service
```

That `systemd` unit file is included with the `wireguard-tools` package.

Of course, you will still need to generate your private key and public key
with `wg genkey` and `wg pubkey`, respectively.

With the exception of the commented lines, which you will likely only want if
the peer has a static IP, the configuration is so symmetrical you don't have to
even think about it.
