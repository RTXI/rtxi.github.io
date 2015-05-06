---
title: My System Is Frozen or Slow!
layout: docpost
categories: docs troubleshoot
---

This issue can be caused by many tings, and getting to its specific cause will require patience. Here are some things to look for: 

1. When does the system freeze or slow down?  
	- Does it freeze after you pick a kernel in the GRUB menu?  
	- Does the freeze affect all kernels? Or is it just the real-time one(s)?  

2. What graphics card are you using?  
	- Is it Nvidia or AMD?  
	- Are you using open-source or proprietary drivers?  

3. If running an RT kernel, are the DAQ drivers loaded? Open the Control Panel module in RTXI and see if the "analogy0" channel is open. If not, the drivers aren't detecting your DAQ.  

<br>

These types of issues can have several causes. It can be your graphics card not being fully supported by the driver, the DAQ driver interfering with framebuffers, interrupt line collisions, etc. If you have issues, you are encouraged to contact us for help. Here are some tips and fixes for common problems:  

<br>

<dl class="dl-horizontal">
	<dt>Freezing at Boot</dt>
		<dd>If your system freezes when it boots, it couls be caused by interrupt collisions between the graphics driver and the analogy driver. We've noticied this happening most frequently on machines with Nvidia cards. You can fix this by opening up the computer and moving the graphics card to a different PCI slot.<br><br>
		If you don't have a spare port, you'll need to get a new graphics card. We recommend AMD cards that have been released long enough for Ubuntu to fully support them. A list of compatible cards is available <a href="https://help.ubuntu.com/community/RadeonDriver"> on Ubuntu's site.</a> 
		</dd>
	<br>
	<dt>Poor Performance</dt>
		<dd>If your system has consistently poor performance, visible within the Performance Measurement Module, that worsens when the DAQ channels are opened, it is likely because the graphics drivers are not using kernel modesetting properly. What that means is that the CPU is handling things the graphics card should, causing it to interfere with the real-time processes it needs to devote time to doing.  <br><br>
		This is likely caused by the graphics card being not fully supported by open-source drivers. You may need to replace your driver. To see if your system is using the graphics driver, run: 
{% highlight bash %}
$ sudo lshw -C display | grep configuration
{% endhighlight %}
		If you don't see your graphics driver (radeon or nouveau) listed, then it's not being properly used. You can also check this by looking at the <code>dmesg</code> output:
{% highlight bash %}
$ dmesg | grep "radeon\|nouveau"
{% endhighlight %}
		If the driver is working properly, you'll see a lot of output. If not, you probably won't see anything. <br><br>
		Let us know if you need help with this issue. Sending us the output from the above commands will help immensely in figuring out your problem.  
		</dd>
</dl>

Hardware can be idiosyncratic and interfere with real-time, but lucky for you, we're here to help.  