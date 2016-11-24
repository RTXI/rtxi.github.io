---
title: RTXI Architecture
layout: post
categories: docs tutorials
---

RTXI uses a two-thread architecture consisting of a real-time (RT) thread and a
non-real-time user interface (UI) thread. RTXI can run on single or
multiprocessor computers. RTXI consists of both system and custom user modules,
each of which spans both threads. RTXI modules communicate and share data in
real-time using a system of signals and slots that supports synchronous
scheduling, as well as asynchronous event handling. On every clock cycle, the
RT thread wakes and signals each active DAQ driver to acquire all active inputs
from external experiment hardware. These data are made available to other
components while the RT thread executes any real-time instructions contained in
loaded modules. When each module has finished executing, the RT thread signals
each DAQ driver to write any output signals to the experiment hardware. The UI
thread manages the graphical components of the system as well as user events
triggered through the interface. Each module features its own encapsulated
interface through which users can control module execution and modify its
various parameters.  

<a href="/assets/img/rtxi-diagram-scaled.png">
  <img src="/assets/img/rtxi-diagram-scaled.png" 
       class="img-responsive center-block">
</a>

RTXI uses the open source [Xenomai](https://xenomai.org) framework to implement
communication with a variety of commercially available multifunction DAQ cards
with both analog and digital input and output channels. This makes RTXI
essentially hardware-agnostic and able to communicate with multiple actuators
and sensors that may span different modalities. Modules contain
function-specific code that can be used in combinations to build custom
workflows and experiment protocols. They are compiled outside the core RTXI
source tree as shared object libraries that are linked at runtime. This
architecture gives RTXI several important features:  

1. Reduced overhead that maximizes real-time performance by loading a minimal
   set of modules at startup
2. Code reusability which eliminates the need to program new experiments
   entirely from scratch
3. Ease by which users can share modules by distributing source code or
   compiled versions of their modules
4. The ability to create and save the entire RTXI workspace and experimental
   setup for use at a later date
5. A simple process by which multiple developers can contribute new features
   with minimal changes to core RTXI source code.

