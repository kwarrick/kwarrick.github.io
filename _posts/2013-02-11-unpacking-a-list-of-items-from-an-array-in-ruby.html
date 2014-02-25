---
layout: post
title: "unpacking a list of items from an array in ruby"
date: 2013-02-11 00:28:13
tags: ruby
---

</p>
I often find myself wanting a subset of a dictionary and find it unsightly syntactically to do a series of element references as it is repetitive and can make lines very long. Here is the example from the docs, augmented to demonstrate my meaning:

{% highlight ruby %}
h = { "cat" => "feline", "dog" => "canine", "cow" => "bovine", ... }
cat, dog, cow = h["cat"], h["dog"], h["cow"]
{% endhighlight %}
</p>

<p>
Hashes of course have the select method allowing you to do something a little less repetitive, but certainly not any less concise in this case, and it still doesn't help us unpack the values.
{% highlight ruby %}
h.select { |k,v| %w{cat dog cow}.include? k }
# => {"cat"=>"feline", "dog"=>"canine", "cow"=>"bovine"} 
{% endhighlight %}
</p>

<p>
Well, I just found <span class="mono">value_at</span> at the bottom of the list on Ruby's Hash object that does exactly what I want:

{% highlight ruby %}
h.values_at("cow", "cat")  
#=> ["bovine", "feline"]

a = ["cat", "dog"]
cat, dog = h.values_at(*a)
{% endhighlight %}<p>
