---
title: Linux Freezes after Reboot
layout: post
categories: docs troubleshoot
---

If you do an OS-based reboot of your the computer and your log-in screen is
laggy or displays errors, it's probably because `kexec-tools` are handling
reboots.  When compiling an RT kernel, you were prompted whether or not to let
`kexec-tools` handle reboots. 
You are advised in the installation instructions (and here) to not allow that. 

The `kexec-tools` utility normally is used to perform 'warm reboots,' which is
when the computer reloads a kernel without fully shutting the system down.  (In
contrast, a cold reboot is when you fully shut down the computer, meaning that
the machine fully stops and it begins to cool down.) The lag you experience is
probably because kexec-tools is rebooting to a non-RT kernel.  Your system is
at that point should not be relied on for running real-time applications. 

To temporarily fix this, fully shutdown the computer to do a cold reboot. To
permanently fix it, disable kexec-tools from handling reboots:  

1. Open /etc/default/kexec (as root).
2. Change `LOAD_KEXEC` from `true` to `false`
3. Save and exit. 

Now, kexec-tools will no longer handle reboots, and your system reboot as one
would expect. 
