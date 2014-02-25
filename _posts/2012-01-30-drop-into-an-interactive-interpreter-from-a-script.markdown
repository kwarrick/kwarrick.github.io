---
layout: post
title: "drop into an interactive interpreter from a script"
date: 2012-01-30 22:33:40
tags: ruby python interactive
---

</p>
Twice this weekend I've found that I would like to drop from a script into the interactive prompt and have the environment and context available to debug and test. Once in Ruby and once in Python.
<p />

<p>
I do most active development with an interpreter open, but copying and pasting into the interpreter quickly becomes tedious.
</p>

<p>
{% highlight python %}
import pdb
# ...
pdb.set_trace()
{% endhighlight %}
</p>

<p>
{% highlight ruby %}
require 'rubygems'
require 'ruby-debug'
# ...
debugger
{% endhighlight %}
</p>

<p>
I will certainly be using these extensively at the very least to test my data-structures.
</p>

<p>
<b>Update 2012-10-11</b><br />
Alternative with Pry,

{% highlight ruby %}
require 'pry'
# ...
binding.pry
{% endhighlight %}
</p>

<p>
<a href="http://stackoverflow.com/questions/2158097/drop-into-python-interpreter-while-executing-function">http://stackoverflow.com/questions/2158097/drop-into-python-interpreter-while-executing-function</a>
<br />
<a href="http://stackoverflow.com/questions/1144560/how-do-i-drop-to-the-irb-prompt-from-a-running-script">http://stackoverflow.com/questions/1144560/how-do-i-drop-to-the-irb-prompt-from-a-running-script</a><p>
