---
layout: post
title: "delay jquery hover event"
date: 2013-10-16 01:45:23
tags: jquery javascript
---

<p>
Suppose you'd like to perform an event when the user hovers over an item, but you'd like that event to be slightly delayed to reduce sensitivity to inadvertent mouse movements.
</p>

<p>
To solve this problem you can decompose the hover action into a <span class="mono">mouseenter</span> and <span class="mono">mouseleave</span>. Then use a <span class="mono">setTimeout</span> to perform your action, but cancel the timer if the mouse leaves too early.
</p>

<p>
Using an immediately invoked function closure, you can store the timer object and clear it easily like so:
</p>

{% highlight javascript %}
(function () {
  var timer;

  function change(event) {
    var that = $(this); 
    timer = setTimeout(function() {
      // ...
    }, 200); 
  }

  function cancel(event) {
    clearTimeout(timer);
  }

  $('selector').mouseenter(change)
    .mouseleave(cancel);
}());
{% endhighlight %}
