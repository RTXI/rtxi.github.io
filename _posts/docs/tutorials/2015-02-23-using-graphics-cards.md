---
title: Using Graphics Cards
layout: docpost
categories: docs tutorials
---

Choosing graphics cards can be a thorny issue in standard Linux alone, let alone real-time Linux. Often, open-source drivers lag behind proprietary ones in terms of compatibility with newer hardware and displays. The two main types, AMD and Nvidia, are supported for the most part within Linux.  

For RTXI, we strongly encourage you to use the open-source drivers. Nouveau is the open-source one for Nvidia cards, and radeon is for AMD ones. No configuration or input on your part is needed to use them. When you install Linux and boot, your kernel will detect the graphics hardware and load the corresponding driver. You can check to see if your driver is loaded by running:  
{% highlight bash %}
$ lsmod | grep "radeon\|nvidia"
{% endhighlight %}

The reason we use open-source drivers is that they use the kernel to directly leverage the graphics card to compute things like the UI and desktop. Proprietary drivers, while technically doing the same thing, function differently and can degrade real-time performance by causing latencies to spike to as high as 100us on some machines. Skipping the drivers altogether forces the CPU to compute the UI, which when coupled with the RT kernel, will make the UI slow and laggy and the real-time performance poorer.  

Here are some guidelines for using graphics cards: 

1. Newer cards are less likely to be supported by open-source drivers.  
2. AMD provides better support for its **open-source** radeon driver than Nvidia does for nouveau.  
3. Nvidia's **proprietary driver** performs better than AMD's proprietary driver (fglrx) and generally provides better support for newer hardware.  
4. If you have an AMD card, use it. If you have an Nvidia one, try it. Tell us if you have issues. We want to keep track of what works and what doesn't.  


Lastly, if you have issues with your display looking weird or distorted, it's probably your graphics card. Check our graphics troubleshooting page for suggestions on what to do or browse though forums online. Someone's probably had the same issue as you at some point.  
