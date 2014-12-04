---
title: Desktop Freezes when Booting into the Live CD
layout: docpost
categories: docs troubleshoot
---

On some machines, the desktop will start out frozen when booted into the Live CD. A workaround is to reboot the system. From the frozen screen, type in `Ctrl+Alt+F2`. This will open tty2, which will not be frozen.  

Login to the new tty. The username is "user" and the password is "live." Run:  
````
$ sudo reboot
````  

Your system will reboot and magically will no longer be frozen. We'll work on a fix to make this workaround unecessary after we figure out why this even happens.  
