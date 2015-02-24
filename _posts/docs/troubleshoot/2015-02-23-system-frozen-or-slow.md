---
title: My System Is Frozen or Slow!
layout: docpost
categories: docs troubleshoot
---

This issue can be caused by many tings, and getting to its specific cause will require patience. Here are some things to look for: 

1. When does the system freeze or slow down?  
   1. Does it freeze after you pick a kernel in the GRUB menu?  
	2. Does the freeze affect all kernels? Or is it just the real-time one(s)?  

2. What graphics card are you using?  
   1. Is it Nvidia or AMD?  
	2. Are you using open-source or proprietary drivers?  

3. Are the DAQ drivers loaded? Open the Control Panel module in RTXI and see if the "analogy0" channel is open. If not, the drivers aren't detecting your DAQ. (Applies to RT kernels. Non-RT kernels can't touch the DAQ.)  

<br>

The issues could be caused by several issues, like your graphics card not being fully supported, the DAQ driver interfering with framebuffers, etc. One thing that we've noticed while debugging our own systems is that on some Nvidia cards, the nouveau driver is incompatible with analogy, causing the GUI to freeze. One almost fix to this is to disable kernel mode setting. Here's now to do it:  
<ol>
<li> Open the /etc/default/grub file as root.</li>
<li> Edit the GRUB_CMDLINE_LINUX_DEFAULT line to read:  
{% highlight bash %}  
GRUB_CMDLINE_LINUX_DEFAULT="quiet splash nomodeset i915.modeset=0 nouveau.modeset=0"
{% endhighlight %}  </li>
<li> Update GRUB.  
{% highlight bash %}  
$ sudo update-grub  
{% endhighlight %}  </li>
</ol>

This prevents the kernel from using the nvidia card to compute the UI. Unfortunately, one side-effect is to offload the UI to the CPU, making it run slower and degrading real-time performance.  

To undo this change, just remove the edits made the the /etc/default/grub file and run `update-grub` again.  
