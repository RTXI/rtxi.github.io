---
title: Linux Freezes after Reboot
layout: docpost
categories: docs troubleshoot
---

If you reboot the computer and the computer displays a laggy log-in screen, it's probably because kexec-tools are handling reboots. The utility normally is used to perform 'warm reboots,' which is when the computer reloads a kernel without fully shutting the system down. The lag is probably because kexec-tools is rebooting to a non-RT kernel. The easiest thing to do here is to disable kexec-tools from handling reboots. To do so:  

1. Open /etc/default/kexec (as root).
2. Change LOAD_KEXEC from "true" to "false"
3. Save and exit. 

Now, kexec-tools will no longer handle reboots, and your system reboot as one would expect. 
