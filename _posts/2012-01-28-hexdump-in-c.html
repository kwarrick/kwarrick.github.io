---
layout: post
title: "hexdump in C"
date: 2012-01-28 00:16:55
tags: 
---

<p>
Code review time, here is a hexdump function I use often for early stage development and debugging:

{% highlight cpp %}
void hexdump(const u_char *buf, const u_int len)
{
  u_int i, j;

  for (i = 0; i < len; i+=16)
  {
    printf("%04x  ", i);

    for(j = 0; j < 16; j++)
    {
      if ((i + j) < len)
        printf("%02X", buf[i+j]);
      else
        printf("  ");
    }

    printf("  ");

    for (j = 0; j < 16 && (j+i) < len; j++)
    {
      if (isprint(buf[i+j]))
        printf("%c", buf[i+j]);
      else
        printf(".");
    }

    printf("\n");
  }
}
{% endhighlight %}

</p>

<p>
Sample output:

<pre style="font-size:17px">
0000  CC7D3718FBBCE091F59D84C608004500 .}7...........E.
0010  003456E740004006F6EDC0A8000D4504 .4V.@.@.......E.
0020  E73588CE005032F40813CE69C2088010 .5...P2....i....
0030  024FED1500000101080A0937A1240198 .O.........7.$..
0040  3F30                             ?0..............
</pre>
</p>
