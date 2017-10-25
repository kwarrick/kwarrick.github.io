---
title: "gdb show asm on break"
date: 2012-03-07 20:14:08
tags: gdb
---

<p>
Display a number of lines:

<pre  class="brush: text">
display /3i $pc
</pre>
</p>

<p>
or
<pre  class="brush: text">
set disassemble-next-line on
</pre>
</p>

<p>
<a href="http://stackoverflow.com/questions/1902901/show-current-instruction-in-gdb">http://stackoverflow.com/questions/1902901/show-current-instruction-in-gdb</a>
</p>
