---
title: Getting Started
categories: docs tutorials
layout: docpost
---

To get started with RTXI for your experiments, there are some hardware requirements you need to satisfy. 
They're pretty easy to meet, and they'll get you set up with a properly performing RTXI installation.  

If you are not familiar with RTXI or what it can do, we recommend looking through the [manual](/manual) first. 

You will need:  

1. Computer
2. Data acquisition card (DAQ)
3. Graphics card (may come with computer)

#### Computer
Most computers built in the last few years will run Linux, but some will perform better for real-time applications. Here are some points to consider when buying new hardware:

1. **What is the CPU type?** We recommend using Intel processors, though AMD ones work, too.
2. **How many PCI/PCIe slots are there?** You will need one PCI or PCIe slot for a graphics card and another PCI slot for a DAQ.

Also, you should have a machine with at least **4 GB of RAM**. While Linux can run with less, you will see degraded performance. Over the past few years, operating systems have been built under the assumption of increasingly capable hardware, and Linux has been no exception.  

#### DAQ
RTXI is tested and developed on systems using National Instruments (NI) cards. While the Xenomai project creates drivers for cards made by other vendors, we do not test them and cannot give you a recommendation to use them. 

If buying a new NI DAQ, get an **M-series** card. **Do not get an X-series card**. Open-source drivers do not currently exist for them, so they cannot be used for data acquisition. For a complete list of what drivers are available for what hardware, look here:  

 - [**List of DAQs supported by the analogy driver**](https://xenomai.org/analogy-practical-presentation/#ni_pcimio)

#### Graphics Card
You should get a discrete graphics card. Using integrated graphics will cause UI computation to be offloaded to the CPU, which at the same time has to handle real-time processes. Based on the systems we've benchmarked so far, you're better off using an AMD card than an Nvidia one. You are also recommended to use open-source drivers instead of their proprietary counterparts.  

What this means for you is that when buying/acquiring a computer, you need to check the type of graphics card it has. You also need to check whether it is supported by open-source drivers. (Often, newer hardware needs some time for the people who code the drivers to extend support for them.) 

Here is a list of graphics card supported by the Nvidia open-source driver (nouveau) and the AMD one (radeon):  

 - [**AMD driver (radeon)**](https://help.ubuntu.com/community/RadeonDriver#Fully_Supported)
 - [**Nvidia driver (nouveau)**](https://wiki.freedesktop.org/nouveau/FAQ/#index14h3)


### Installing RTXI

Look through our [installation instructions](/install) to see how to install RTXI 2.0. You can install RTXI with our live CD, or you can install a generic version of Linux and then manually compile and install RTXI and its real-time dependencies. It's up to you.  

If you run into issues, look through our available [documentation](/docs), and if it doesn't help, email us or [submit an issue on GitHub](https://github.com/rtxi/rtxi/issues). We recommend you do the latter. 

#### Note

[Let us know](https://github.com/rtxi/rtxi.github.io/issues/) if any links are broken. They are all supposed to point directly to lists of hardware compatible with drivers. If they don't, something went terrible wrong, and we need to fix the links.   
