---
title: Setting a Default Boot Kernel
layout: post
categories: docs tutorials
---

It can get annoying choosing the real-time kernel from the submenu every time
you boot your computer, especially if you miss the timing and it boots generic
Linux.  

By default, the GRUB bootloader sorts your installed kernels in descending
version based on the kernel version number, and boots from the first one. You
can save yourself some frustration by changing GRUB to boot from the real-time
kernel by default.  

**Note:** This is only for convenience. It has no effect on real-time
performance or the functioning of RTXI.  

While it is possible to specify a *specific* kernel, it is much easier to tell
GRUB to use the kernel used last time. To make GRUB do this, open
<code>/etc/default/grub</code> as root and make the following edits:  

1. Change <code>GRUB_DEFAULT=0</code> to <code>GRUB_DEFAULT=saved</code>.
2. Add a new line that says <code>GRUB_SAVEDEFAULT=true</code>.

Save your edits (again, you need to be root), and update GRUB by running: 

{% highlight bash %}
$ sudo update-grub
{% endhighlight %}

From now on, GRUB will boot the last-used kernel by default. If you want to
choose a different one, select it manually.  

**Note:** If you have a LUKS-encrypted volume or otherwise encrypt your boot
partition, this will fail. You will have to manually change the `GRUB_DEFAULT`
options to something like `"1>2"`, for example, which will make GRUB boot the
kernel listed as the third option in the submenu opened on the second line of
the main menu.  
