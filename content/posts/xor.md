---
title: "xor"
date: 2012-01-29 02:27:35
tags: ["ruby", "xor"]
---

<p>
Note to self, stop rewriting these functions, you already have them:

```

# xor string str with string ciph
def xor(str, ciph)
  m = (str.size.to_f / ciph.size).ceil
  z = str.bytes.zip((ciph * m).bytes)
  z.map { |a| (a[0] ^ a[1]).chr }.join
end

# xor each byte in string str with byte
def xor_each(str, byte)
  str.each_byte.map { |c| (c ^ byte).chr }.join
end
```

<pre style="font-size:17px">
xor("aaa", "\x01\x01\x01")
 => "```" 

xor_each("aaa", 0x01)
 => "```" 
</pre>
</p>
