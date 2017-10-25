---
title: "stay on home row"
date: 2015-01-27
tags: karabiner seil mac osx vim spectacle
---

I am sick of moving my hands to the mouse and arrow keys. This is my formula on Mac OS X for minimizing mouse usage while I'm working:

**MacVim** [[1](https://code.google.com/p/macvim/)] &mdash; Modal editor or bust.

**Spectacle** [[2](http://spectacleapp.com/)] &mdash; moving windows with keyboard shortcuts.  
I prefer vim-like `Shift`+`Command`+`H/J/K/L` for moving windows about.

<img src="/img/spectacle.png">

**Vimium** [[3](http://vimium.github.io/)] &mdash; Chromium extension for vim-like page navigation shortcuts.  
The easymotion-esque link navigation is just brilliant. You can 'click' links, and complete complex forms without touching the mouse.

**Seil and Karabiner** [[4](https://pqrs.org/osx/karabiner/seil.html.en),[5](https://pqrs.org/osx/karabiner/index.html.en)] &mdash; Remap `CAPSLOCK` key and add custom keyboard shortcuts.  
The final piece that makes it all complete is remapping the otherwise entirely unused and very conveniently located `CAPSLOCK` key to something useful.

I couldn't get away from using the arrow keys at the command line to traverse the readline history or for selecting the correct URL in the browser autocomplete list.

So, I remapped the `CAPSLOCK` key to the right alt/option key, and configured a shortcut that maps `CAPSLOCK`+`H/J/K/L` to the arrow keys.

<img src="/img/seil.png">

```xml
  <!-- ~/Library/Application Support/Karabiner/private.xml -->
  <item>
    <name>Capslock Vim Arrows</name>
    <appendix>Use capslock+HJKL as arrow keys.</appendix>
    <identifier>private.capslock_vim_arrows</identifier>
    <autogen>
      __KeyToKey__ KeyCode::H, ModifierFlag::OPTION_R, KeyCode::CURSOR_LEFT
    </autogen>
    <autogen>
      __KeyToKey__ KeyCode::J, ModifierFlag::OPTION_R, KeyCode::CURSOR_DOWN
    </autogen>
    <autogen>
      __KeyToKey__ KeyCode::K, ModifierFlag::OPTION_R, KeyCode::CURSOR_UP
    </autogen>
    <autogen>
      __KeyToKey__ KeyCode::L, ModifierFlag::OPTION_R, KeyCode::CURSOR_RIGHT
    </autogen>
  </item>  
```

