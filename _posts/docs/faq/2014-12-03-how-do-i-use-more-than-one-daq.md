---
title: How do I use more than one DAQ?
layout: default
categories: faq
---

RTXI has no built-in software limitations on the number of DAQ cards. You will need to edit the configuration file, however. Here is the relevant excerpt of /etc/rtxi.conf:
{% highlight xml %}
<OBJECT component="plugin" library="comedi_driver.so" id="2" >
<PARAM name="0" >/dev/comedi0</PARAM>
<PARAM name="Num Devices" >1</PARAM>
<OBJECT id="13" name="0" />
</OBJECT>
{% endhighlight %}

Edit the lines to add another COMEDI device and change the number of devices:
{% highlight xml %}
<PARAM name="0" >/dev/comedi0</PARAM>
<PARAM name="0" >/dev/comedi1</PARAM>
<PARAM name="Num Devices" >2</PARAM>
{% endhighlight %}
