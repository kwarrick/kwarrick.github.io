---
layout: post
title: "shellcode test harnesses"
date: 2013-06-18 15:18:12
tags: c buffer overflow
---

<p>
On the <b>stack</b>:
{% highlight cpp %}
char sc[] = "...\xCD\x80";

int main()
{
  int *ret;
  ret = &ret + 2;
  *ret = (int *) sc;
  return 0;
}
{% endhighlight %}
</p>

<p>
On the <b>heap</b>:
{% highlight cpp %}
char sc[] = "";

int main()
{
  // mmap(NULL, size, 7, 34, -1, 0);
  void *map = mmap(NULL, strlen(sc), PROT_EXEC|PROT_READ|PROT_WRITE, MAP_PRIVATE|MAP_ANONYMOUS, -1, 0); 
  memcpy(map, sc, strlen(sc));
  ((int(*)())map)();
}
{% endhighlight %}
</p>
