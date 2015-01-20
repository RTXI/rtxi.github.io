---
title: Why are there negative latencies?
layout: default
categories: docs faqs
---
Negative latencies mean that the latency test has not been properly calibrated. The test calculates latencies based on when tasks are expected to be completed, and in doing so, it attempts to account for jitter in the system. Latencies become negative when the real-time thread wakes *before* it is expected to.  

You can correct this behavior by running (as root):  
{% highlight bash %}
# echo 0 > /proc/xenomai/latency
{% endhighlight %}
