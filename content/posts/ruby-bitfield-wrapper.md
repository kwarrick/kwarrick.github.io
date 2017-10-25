---
title: "ruby bitfield wrapper"
date: 2012-02-23 16:12:22
tags: ruby bitfield
---

<p>
{% highlight ruby %}
  
  value = 0b11010011
  
  bf = BitField.new(value, {:a => 0..5, :b => 6..7, :c => 8})
  
  # or
  
  bf = BitField.new(value) do |f|
     f.a = 0..3
     f.b = 4..7
  end

  puts bf.a.to_s(2)  
  # => 1101
  
  puts bf.b.to_s(2)
  # => 1000

  bf.b = 0b1010
  puts bf.b.to_s(2)
  # => 1010

{% endhighlight %}

{% highlight ruby %}
require 'ostruct'

class BitField
  attr_reader :names
  
  def initialize(value=0, hash={})
    @value = value
    @names = hash.keys.map(&:to_s)
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
    mask = ((1 << bits.size) - 1) << bits.first
    (@value & mask) >> bits.first
  end
  
  def set_bits(offset, v) 
    bits = [*offset]
    mask = ((1 << bits.size) - 1) << bits.first
    clear = 0xffff ^ mask
    @value = (@value & clear) | ((v << bits.first) & mask)
  end
end

{% endhighlight %}

</p>
