---
title: Can I run RTXI in non-real-time?
layout: default
categories: docs faqs
---
RTXI can be run in non-real-time to debug your code. This will require that you manually configure and recompile RTXI. In the RTXI directory, go to the scripts directory and run:

{% highlight bash %}
$ sudo ./install-rtxi.sh
{% endhighlight %}

You will be prompted to enter your system configuration. Select "2" to run in non-real-time (POSIX). 

Running RTXI in non-real-time is useful for debugging purposes mainly, and it also allows the application to be installed without having to install a real-time kernel beforehand.
