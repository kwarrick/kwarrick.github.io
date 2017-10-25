---
title: "streams with tshark"
date: 2012-03-09 06:22:05
tags: ["tshark"]
---

<p>
Wiresharks command-line complement,  tshark, is pretty handy in a jam. You can even extract stream numbers:

```
$ tshark -r dump.pcap -T fields -e tcp.stream
```
</p>

<p>
Using the stream numbers, you can be much more precise in your filters:

```
$ tshark -r dump.pcap -T fields -e text tcp.stream eq $stream 
```

</p>
