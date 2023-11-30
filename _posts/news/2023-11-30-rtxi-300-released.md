---
title: "RTXI 3.0.0 Released!"
layout: post
category: news
---

RTXI v3.0.0 is now available

This release modernizes RTXI architecture and leverages newer techniques on performance and maintainability patterns.

The need for these updates originates primarily from the difficulty of updating RTXI 2.4 to the new Xenomai API, as well as the unfortunate news that the Analogy drivers used for hardware access would not be supported any longer under Xenomai. These and other architectural issues made it necessary to apply the lessons learned from years of use to improve software architecture and flexibility. This update relies on proven methods, and uses existing code to create a modern RTXI application. Some of the changes introduced:
New Functionality

    - New abstractions that reduces user and developer cognitive load
    - Introduces a new scheduler and connector classes for faster and more accurate plugin real-time scheduling
    - A redesign of the event system to have stronger typing and safer abstractions
    - Support for the newest Xenomai framework now called EVL
    - Introduction of new DAQ driver model to support non Analogy devices
    - Support for National Instruments DAQ PCIe devices
    - Introduction of the Real-Time Platform Abstraction Layer (RTPAL) for non Xenomai real-time support
    - Automatic driver and real-time platform detection scheme for ease of use
    - Central logging system to capture events fired by RTXI components and plugins
    - Retire the DefaultGuiModel classes and introduction of the widget classes (plugin, component, and panel)
    - Migration from autotools build system to cmake
    - Update to installation instructions for both main RTXI components and DSO plugins
    - Major updates to the builtin plugins such as data recorder and oscilloscope
    - and many more

You can download the new version at the repository and run the install_rtxi.sh script. Test it out and let us know what you think.

Happy sciencing!
