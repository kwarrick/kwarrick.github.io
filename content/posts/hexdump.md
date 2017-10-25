---
title: "hexdump"
date: 2012-01-12 01:15:36
tags: ["hex", "hexdump", "shellcode"]
---

<p>
Often, when developing shellcode you'll want to dump a file in the backslash hex notation (e.g. \x0A), but hexdump by default outputs input offset, space delimited hex, and ascii representations:

{% highlight bash %}
$ hexdump -C shellcode
00000000  31 c0 31 db 31 c9 99 b0  a4 cd 80 6a 0b 58 51 68  |1.1.1......j.XQh|
00000010  2f 2f 73 68 68 2f 62 69  6e 89 e3 51 89 e2 53 89  |//shh/bin..Q..S.|
00000020  e1 cd 80                                          |...|
00000023
{% endhighlight %}
</p>

<p>
Fortunately, hexdump is feature-rich and allows you to specify format strings, iteration, and step:

{% highlight bash %}
$ hexdump -v -e '"\\\x" 1/1 "%02x"' shellcode
\x31\xc0\x31\xdb\x31\xc9\x99\xb0\xa4\xcd\x80\x6a\x0b\x58\x51\x68\x2f\x2f\x73\x68\x68\x2f\x62\x69\x6e\x89\xe3\x51\x89\xe2\x53\x89\xe1\xcd\x80
{% endhighlight %}
</p>

<p>
1/1 represents the iteration-count/byte-count, that is, how many times we want to iterate over the input and how large each chunk of the input will be. 
</p>
