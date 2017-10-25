---
title: "Doh! I forgot to sudo."
date: 2011-12-07 21:46:00
tags: ["vim", "sudo"]
---

<p>
I often forget to <span class="mono">sudo vim</span>. I make significant changes to the file just to find out that I don't have permissions to save the file. 

Well, now that I've memorized this little gem it doesn't matter:

</p>

```

:w! sudo tee %

```

<p>
The % is a shortcut for the filename. You are really just piping the output through tee to the file - effectively overwriting the contents.

Ta-dah!
</p>
