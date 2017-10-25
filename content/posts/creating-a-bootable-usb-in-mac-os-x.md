---
title: "creating a bootable usb in mac os x"
date: 2013-06-24 18:03:52
tags: ["mac", "osx", "liveusb", "bootable"]
---

<p>
1) Convert ISO to IMG.
{% highlight bash %}
hdiutil convert -format UDRW -o /path/to/output.img /path/to/input.iso
{% endhighlight %}
</p>

<p>
2) Unmount drive.
{% highlight bash %}
diskutil unmountDisk /dev/diskN
{% endhighlight %}
</p>

<p>
3) Copy IMG to drive.
{% highlight bash %}
sudo dd if=/path/to/output.img of=/dev/rdiskN bs=1m
{% endhighlight %}
</p>

<p>
4) Eject drive.
{% highlight bash %}
diskutil eject /dev/diskN
{% endhighlight %}
</p>
