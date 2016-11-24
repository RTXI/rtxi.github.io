---
title: Can I use RTAI instead of Xenomai?
layout: default
categories: docs faqs
published: false
---

Yes, you can use RTAI. Before v2.0, RTXI ran on an RTAI-patched kernel. Xenomai
is actually a fork of RTAI and is designed to be much easier to customize and
patch. To use RTXI, you will not be able to run our install\_rtxi.sh script.
Instead, you will need to download RTAI and patch then install a kernel
manually.  

Once you have the kernel running, go to your RTXI git directory and run:
{% highlight bash %}
$ sh autogen.sh
$ ./configure --enable-rtai
$ make
$ sudo make install
{% endhighlight %}
