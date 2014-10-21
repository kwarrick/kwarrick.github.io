---
layout: post
title: "enforce correct shift usage"
date: 2014-10-21
tags: mac osx karabiner
---

### Bad Typing Habits

Touch typing rules state that the shift key is always pressed by the pinky finger opposite the finger pressing the other key.

Unfortunately, I have the bad habit of using the right shift for semicolons, double quotes, curly braces, and question marks, which requires lifting my right hand.

As I become dependent on VIM for everyday coding, I also become increasingly aware of any keystrokes that drag my hands away from the home row. 

Also, long hours of coding can leave my wrist feeling tight. 

So, in an effort to minimize stress to my wrist and speed up coding, I wanted to compel myself to use the correct shift key. 

### Introducing Karabiner

Karabiner (previously KeyRemap4MacBook), is a keyboard customizer for OS X.  

<img src="/img/karabiner.png"/>

[Karabiner][1] comes with a lot of useful predefined bindings, but you can also specify your own private bindings in `~/Library/Application Support/Karabiner/private.xml`. 

Below is an entry from my configuration for enforcing proper shifting:

```xml
<?xml version="1.0"?>
<root>
  <item>
    <name>Compel Semicolon</name>
    <appendix>Disable right shift for colon.</appendix>
    <identifier>private.compel_colon</identifier>
    <autogen>
      __KeyToKey__ 
      KeyCode::SEMICOLON, ModifierFlag::SHIFT_R | ModifierFlag::NONE,
      KeyCode::VK_NONE
    </autogen>
  </item>
  <!-- ... -->
</root>
```

My complete configuration can be found in this [gist][2]. 

**WARNING:** Forgetting you disabled the key combination can be quite infuriating, and after retyping the same character repeatedly without effect, you may want to throw things. 


[1]: https://pqrs.org/osx/karabiner/ 
[2]: https://gist.github.com/kwarrick/fa96ac725182518798ba

