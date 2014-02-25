---
layout: post
title: "single user boot for grub 2"
date: 2011-12-21 20:16:38
tags: grub single-user
---

</p>
Ubuntu changed to grub 2 and I often find myself looking up how to finagle my way into a single user shell.

<pre style="font-size: 17px">

Step 1.
   Hold the right <b>shift</b> to display the grub menu at boot time.

Step 2.
   Select the correct kernel, press <b>CTRL+e</b> to edit the boot command.

Step 3.
   Append the two directives  <b> Single init=/bin/bash </b>

Step 4.
   Press <b>CTRL+x</b> to boot and wait for the root prompt.

Step 5.
   Remount / as read/write with the command:
     # mount -o remount,rw /

</pre>

</p>

<p>

When you are finished, issue a <span class="mono">reboot -f</span> unless you are fond of kernel panics.

<br />
<br />

*YMMV

</p>


</pre><p>
