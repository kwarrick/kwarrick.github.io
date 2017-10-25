---
title: "delay jquery hover event"
date: 2013-10-16 01:45:23
tags: ["jquery", "javascript"]
---

Suppose you'd like to perform an event when the user hovers over an item, but
you'd like that event to be slightly delayed to reduce sensitivity to
inadvertent mouse movements.

To solve this problem you can decompose the hover action into a `mouseenter`
and `mouseleave`. Then use a `setTimeout` to perform your action, but cancel
the timer if the mouse leaves too early.

Using an immediately invoked function closure, you can store the timer object
and clear it easily like so:

```js
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
```
