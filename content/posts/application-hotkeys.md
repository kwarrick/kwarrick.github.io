---
layout: post
title: "application hotkeys"
date: 2016-02-07
tags: mac osx
---

In a previous post [[1][stay-on-home-row]], I detailed some of the 
ways I try to minimize moving my hands from the home row. What Gustavo Duarte 
calls "Home Row Computing" [[2][duartes]].

Recently I got very frustrated with my usual workflow for switching between 
applications. 

For a long time now, I have organized my applications across 6 Desktops &mdash;
provided by Mission Control &mdash; a feature I must note was shamelessly ripped
from other Unix desktop managers.

<img src="/img/desktop-shortcuts.png">

I dedicate the 6 desktops as follows:   

```
  1. Terminal
  2. Text Editor
  3. Browser
  4. Mail and Chat
  5. Miscellaneous
  6. Empty
```

This scheme worked really well when I was doing most of my development on a
13" MacBook, which didn't really have the screen real estate to tile windows
next to each other. `Command + 1` became essentially an application
shortcut to the terminal, `Command + 2` a shortcut to my editor, and so forth.

Now, however, I have a much larger screen that can accommodate an ~80 character
width editor and a browser or terminal, and I have found myself breaking away 
from what was once my compulsively strict organization scheme.

I still have 6 desktops, but now my terminal, editor, and browser windows are
intermingled on the first 3. I have, in effect, lost my application shortcuts.

Which brings me to the huge frustration in my workflow. 

I have taken to using `Command + Tab` and `Command + ~` to switch between 
applications and application windows, but I find myself holding `Command` and 
smashing `Tab` over and over again to get back to my Terminal or likewise.

It seems like a small speed bump, but it has become a real annoyance.

So, I set out to make dedicated keyboard shortcuts to my most used 
applications &mdash; iTerm, MacVim, and Google Chrome.

My solution is an adaptation of this post [[3][launch-any-app]] for launching an
application with a keyboard shortcut. We create an Automator 'Service' script to
'Activate' the application, and then we add a keyboard shortcut for the service
in System Preferences.

Run the Automator application and choose Service:
<img src="/img/automator-service.png">

Search for the `Run Javascript` action, we will use the relatively new 
Javascript for Automation (JXA) for activating or launching the application 
window:
<img src="/img/automator-activate-js.png">

Finally, under Keyboard settings in System Preferences, we can make custom
shortcuts for our Services. I chose to complete my `Command+Number` pattern:
<img src="/img/application-shortcuts.png">

Overall, I am content with solution though there is a noticeable millisecond 
delay incurred running the Service; it does not change windows quite as quickly
as `Command-Tab`. 

[stay-on-home-row]: /2015/01/27/stay-on-home.html
[duartes]: http://duartes.org/gustavo/blog/post/home-row-computing-on-mac/
[launch-any-app]: http://computers.tutsplus.com/tutorials/how-to-launch-any-app-with-a-keyboard-shortcut--mac-31463
