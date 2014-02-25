---
layout: post
title: "ruby bitfield wrapper"
date: 2012-02-23 16:12:22
tags: ruby bitfield
---

<p>
{% highlight ruby %}
  
  value = 0b11010011
  
  bf = BitField.new(value, {:a =&gt; 0..5, :b =&gt; 6..7, :c =&gt; 8})
  
  # or
  
  bf = BitField.new(value) do |f|
     f.a = 0..3
     f.b = 4..7
  end

  puts bf.a.to_s(2)  
  # =&gt; 1101
  
  puts bf.b.to_s(2)
  # =&gt; 1000

  bf.b = 0b1010
  puts bf.b.to_s(2)
  # =&gt; 1010

{% endhighlight %}

{% highlight ruby %}
require 'ostruct'

class BitField
  attr_reader :names
  
  def initialize(value=0, hash={})
    @value = value
    @names = hash.keys.map(&amp;:to_s)
    @fields = OpenStruct.new(hash)
    yield(@fields) if block_given?
  end
  
  def method_missing(m, *args)
    mname = m.id2name
    if args.empty?
      get_bits(@fields.send(m))
    elsif mname.chomp!('=')
      set_bits(@fields.send(mname), args[0].to_i)
    end
  end
  
  def to_i
    @value
  end
  
  def to_hash
    h = {}
    @names.map do |n| 
      h[n.to_sym] = get_bits(@fields.send(n))
    end
    return h
  end
  
  private
  def get_bits(offset)
    bits = [*offset]
    mask = ((1 &lt;&lt; bits.size) - 1) &lt;&lt; bits.first
    (@value &amp; mask) &gt;&gt; bits.first
  end
  
  def set_bits(offset, v) 
    bits = [*offset]
    mask = ((1 &lt;&lt; bits.size) - 1) &lt;&lt; bits.first
    clear = 0xffff ^ mask
    @value = (@value &amp; clear) | ((v &lt;&lt; bits.first) &amp; mask)
  end
end

{% endhighlight %}

</p>
