---
title: Getting Started
categories: docs tutorials
layout: post
---

To get started with RTXI for your experiments, there are some hardware
requirements you need to satisfy.  They're pretty easy to meet, and they'll get
you set up with a properly performing RTXI installation.  

If you are not familiar with RTXI or what it can do, we recommend looking
through the [manual](/manual) first. 

You will need:  

1. Computer
2. Data acquisition card (DAQ)
3. Graphics card (may come with computer)

#### Computer
Most computers built in the last few years will run Linux, but some will
perform better for real-time applications. Here are some points to consider
when buying new hardware:

1. **What is the CPU type?** We recommend using Intel processors, though AMD
   ones work, too.
2. **How many PCI/PCIe slots are there?** Most computers now come with only PCIe
   slots, so make sure to get a PCIe compatible DAQ card. Currently RTXI only
   supports National Instrument DAQ cards.

Also, you should have a machine with at least **4 GB of RAM**. While Linux can
run with less, you will see degraded performance. Over the past few years,
operating systems have been built under the assumption of increasingly capable
hardware, and Linux has been no exception.  

#### DAQ
RTXI is tested and developed on systems using National Instruments (NI) cards.
The Xenomai project may still support PCI cards, but not PCIe, and we
do not test them so we cannot give you a recommendation to use them. Instead we 
advice downloading and installing the NIDAQmx library, which supports a wide 
range of National Instruments DAQ cards and is the interface used by RTXI. Here are
a list of resources for downloading and installing NIDAQmx:

 - [**Download NIDAQmx**](https://www.ni.com/en/support/downloads/drivers/download.ni-daq-mx.html)
 - [**Installation Instructions for NIDAQmx in Linux**](https://www.ni.com/docs/en-US/bundle/ni-platform-on-linux-desktop/page/installing-ni-drivers-and-software-on-linux-desktop.html)
 - [**DAQ driver and operating system compatibility**](https://www.ni.com/en/support/documentation/compatibility/21/ni-hardware-and-operating-system-compatibility.html)

#### Graphics Card
**NOTE:** The information in this section was compiled over a decade ago, and a
lot has changed since then. Nvidia now provides better support for linux drivers.
Research whether your graphics card has driver support for linux.

You should get a discrete graphics card. Using integrated graphics will cause
UI computation to be offloaded to the CPU, which at the same time has to handle
real-time processes. Based on the systems we've benchmarked so far, you're
better off using an AMD card than an Nvidia one. You are also recommended to
use open-source drivers instead of their proprietary counterparts.  

What this means for you is that when buying/acquiring a computer, you need to
check the type of graphics card it has. You also need to check whether it is
supported by open-source drivers. (Often, newer hardware needs some time for
the people who code the drivers to extend support for them.) 

Here is a list of graphics card supported by the Nvidia open-source driver
(nouveau) and the AMD one (radeon):  

 - [**AMD driver (radeon)**](https://help.ubuntu.com/community/RadeonDriver#Fully_Supported)
 - [**Nvidia driver (nouveau)**](https://wiki.freedesktop.org/nouveau/FAQ/#index14h3)


### Installing RTXI

Look through our [installation instructions](/install) to see how to install
RTXI {{ site.rtxi_version }}. If you run into issues, look through our 
available [documentation](/docs), and if it doesn't help, email us or 
[submit an issue on GitHub](https://github.com/rtxi/rtxi/issues). We recommend 
you do the latter. 

#### Note

[Let us know](https://github.com/rtxi/rtxi.github.io/issues/) if any links are
broken.  They are all supposed to point directly to lists of hardware
compatible with drivers.  If they don't, something went terribly wrong, and we
need to fix the links. 
