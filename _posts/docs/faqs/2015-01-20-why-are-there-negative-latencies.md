---
title: Why are there negative latencies?
layout: default
categories: docs faqs
---
Negative latencies mean that the latency test has not been properly calibrated. The test calculates latencies based on when tasks are expected to be completed, with some overhead going toward computing the timer. To avoid including the time it takes to compute the timer, xenomai offsets the measured latency with a static value, written in nanoseconds and stored in <code>/proc/xenomai/latency</code>. If the value is negative, then xenomai is overcompensating.  

You can correct this behavior by running (as root):  
{% highlight bash %}
# echo 0 > /proc/xenomai/latency
{% endhighlight %}

What this means is that the latency test will not try to factor out the time to compute the timer. 
