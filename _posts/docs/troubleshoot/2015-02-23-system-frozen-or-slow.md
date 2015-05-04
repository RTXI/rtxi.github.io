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

Issues can have several causes, like your graphics card not being fully supported by the driver, the DAQ driver interfering with framebuffers, interrupt line collisions, etc. If you have issues, you are encouraged to contact us for help. Here are some tips and fixes for common problems.  

If your system freezes when it boots, it couls be caused by interrupt collisions between the graphics driver and the analogy driver. We've noticied this happening most frequently on machines with Nvidia cards. You can fix this by opening up the computer and moving the graphics card to a different PCI slot. 
