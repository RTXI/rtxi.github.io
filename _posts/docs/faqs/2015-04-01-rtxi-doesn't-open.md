---
title: Why won't RTXI open?
categories: docs faqs
layout: default
---

There are several reasons for RTXI to not open. 

<ol>
  <li><strong>RTXI is already running.</strong>
    <p>
      If you run <code>rtxi</code> in the terminal and get this output, RTXI is
      already running:
    </p>

{% highlight bash %}
$ sudo rtxi
../src/rt_os-xenomai.cpp:123:RT::OS::createTask : failed to create task
../src/rt.cpp:157:RT::System::System : failed to create realtime thread
{% endhighlight %}

    <p>
      The error happens because only one instance of RTXI can be running on the
      system. Check who is running it by entering:
    </p> 

{% highlight bash %}
$ ps ax -o euser,comm | grep rtxi
{% endhighlight %}

    <p>
      If the command shows someone else's username, that means they have RTXI
      open. Bug them about closing it or close it yourself by running <code>$
      sudo pkill rtxi</code>. Note that workspaces, open files, etc. will
      <strong>not</strong> be saved when force-closing RTXI. 
    </p>
    <p>
      If it's your username, RTXI may not have exited cleanly from sometime
      earlier. You can run <code>$ sudo pkill rtxi</code> for this case, too.
    </p>
    <p>
      Now, you should be able to run RTXI.
    </p>
  </li>
  <li><strong>You aren't using a real-time kernel.</strong>

    <p>Check the kernel you are using. Run this in the terminal:</p>

{% highlight bash %}
$ uname -r
{% endhighlight %}

    <p>
      You will get one line of output that tells you what kernel you are using.
      If it has the word "xenomai" in it, then it's a real-time kernel. If not,
      then it isn't.
    </p> 
    <p>
      If it's not a real-time kernel, you'll have to reboot your computer and
      pick a real-time kernel in the GRUB boot menu that pops up. If you don't
      see it, enter the "Advanced options..." submenu and look there.
    </p>
    <p>
      Also, see 
      <a href="/docs/tutorials/2015/04/01/setting-a-default-boot-kernel/">this
      page </a> about setting a default kernel.
    </p>
  </li>
</ol>
