---
title: Can I use RTAI instead of Xenomai?
layout: default
categories: docs faqs
---

We currently do not support RTAI. Earlier versions (1.x) did, but limited time
and other development priorities mean we no longer focus any effort on
maintaining our RTAI/COMEDI interface. 

If you need to use RTXI with RTAI, the old source code is still available for
you to use. Just remember that you will need to compile and install an
RTAI-patched kernel and the COMEDI drivers for you data acquisition card on
your own. You can find the old code in our git history: 

{% highlight bash %}
$ git clone https://github.com/rtxi/rtxi
$ cd rtxi
$ git checkout 8178f288310377284c1058ca2d188a1a8ae309fc
{% endhighlight %}

Look for `src/rt_os-rtai.cpp`, `plugins/comedi_device`, and
`plugins/comedilib_device`.
