---
title: My System Is Frozen or Slow!
layout: docpost
categories: docs troubleshoot
---

This issue can be caused by many tings, and getting to its specific cause will
require patience. Here are some things to look for: 

1. When does the system freeze or slow down?  
  - Does it freeze after you pick a kernel in the GRUB menu?  
  - Does RTXI cause the slowdown or is it slow upon boot?  
  - Does the freeze affect all kernels? Or is it just the real-time one(s)?  

2. What graphics card are you using?  
  - Is it Nvidia or AMD?  
  - Are you using open-source or proprietary drivers?  

3. If running an RT kernel, are the DAQ drivers loaded? Open the Control Panel
   module in RTXI and see if the "analogy0" channel is open. If not, the
   drivers aren't detecting your DAQ.  

4. How is your BIOS configured? Some settings, such as multithreading,
   frequency scaling, and spread-spectrum clocking, degrade real-time
   performance and should be disabled.  

<br>

These types of issues can have several causes. It can be your graphics card not
being fully supported by the driver, the DAQ driver interfering with
framebuffers, interrupt line collisions, etc. If you have issues, you are
encouraged to contact us for help. Here are some tips and fixes for common
problems:  

<br>

<dl class="dl-horizontal">
  <dt>Freezing at Boot</dt>
    <dd>
      <p>
        If your system freezes when it boots, it couls be caused by interrupt
        collisions between the graphics driver and the analogy driver. We've
        noticied this happening most frequently on machines with Nvidia cards.
        You can fix this by opening up the computer and moving the graphics
        card to a different PCI slot.  
      </p>
      <p>
        If that doesn't fix your system, you can delve deeper to find out
        whether there are still interrupt collisions. When Linux freezes, you
        can drop to another tty by entering <code>Ctrl+Alt+F2</code>. You can
        then enter you login information. From the new shell, enter:  
      </p>

{% highlight bash %}
$ lspci -v | less
{% endhighlight %}

      <p>
        Scroll through the output and check if anything has the same IRQ number
        as the DAQ (the National Instuments card) or the graphics card.
        Occasionally, things like the Ethernet card or a USB port can
        interfere.  If you don't have a spare port, you'll need to get a new
        graphics card.  We recommend AMD cards that have been released long
        enough for Ubuntu to fully support them.  A list of compatible cards is
        available 
        <a href="https://help.ubuntu.com/community/RadeonDriver"> on Ubuntu's
        site.</a> 
      </p>
    </dd>
  <br>
  <dt>Poor Performance</dt>
    <dd>
      <p>
        If your system has consistently poor performance, visible within the
        Performance Measurement Module, that worsens when the DAQ channels are
        opened, it is likely because the graphics drivers are not using kernel
        modesetting properly. What that means is that the CPU is handling
        things the graphics card should, causing it to interfere with the
        real-time processes it needs to devote time to doing.  
      </p>
      <p>
        This is likely caused by the graphics card being not fully supported by
        open-source drivers. You may need to replace your driver. To see if
        your system is using the graphics driver, run:  
      </p>

{% highlight bash %}
$ sudo lshw -C display | grep configuration
{% endhighlight %}

      <p>
        If you don't see your graphics driver (radeon or nouveau) listed, then
        it's not being properly used. You can also check this by looking at the
        <code>dmesg</code> output:
      </p>

{% highlight bash %}
$ dmesg | grep "radeon\|nouveau"
{% endhighlight %}

      <p>
        If the driver is working properly, you'll see a lot of output. If not,
        you probably won't see anything. 
      </p>
      <p>
        Let us know if you need help with this issue. Sending us the output
        from the above commands will help immensely in figuring out your
        problem.  
      </p>
    </dd>
</dl>

Hardware can be idiosyncratic and interfere with real-time, but lucky for you,
we're here to help.  
