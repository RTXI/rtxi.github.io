---
title: What Is Real-time Computing?
layout: post
categories: docs tutorials
---

In general, an operating system is responsible for managing the hardware
resources of a computer. A real-time operating system is a refinement in that
it perfoms tasks with extreme precision and reliability. This is important in
automated process control systems where a delay can cause a critical failure of
the overall system.  

#### Hard vs. Soft Real-time  

To be considered real-time, an operating system must have a known maximum time
for each of the operations that it performs. Operating systems that can
absolutely guarantee a maximum time for these operations are called hard
real-time, while operating systems that can only guarantee a maximum most of
the time are considered soft real-time. The idea is that in a hard real-time
system, the completion of an operation after its deadline is considered
useless, and in the most non-permissive of systems, for instance car brakes,
missed deadlines constitute system failure. In contrast, a soft real-time
system can handle lateness, usually by pausing processes based on some
execution priority scheme.  

Most operating systems allow programmers to specify a priority for the overall
application and even for different tasks within the application, called
threads. These priorities are handled by the operating system's scheduler,
which decides how to allocate system resources when many tasks need to be
executed more or less simultaneously and whether or not to interrupt a task
when those with higher priority are waiting.  

In practice, general-purpose operating systems, such as Microsoft Windows, are
optimized to run a variety of applications and processes simultaneously.
Windows uses system interrupts to distribute processor time between different
tasks that must access the same shared resources. Standard Linux does the same.
It can be made to run in real-time, though, by inserting a small high-priority,
real-time microkernel between the hardware and standard Linux kernel. The
microkernel's scheduler traps any software-related system interrupts that would
otherwise preempt system resources from any real-time tasks it executes,
thereby guaranteeing that real-time tasks are not interrupted and execute with
higher priority than normal Linux processes. RTXI uses a real-time thread for
actual process control and a non-realtime thread handled by standard Linux for
the graphical user interface.  

#### What Real-time Can Do 

A real-time process control system must constantly process a set of inputs and
produce a set of outputs. Real-time applications must be carefully programmed
to ensure that the total amount of time spent accessing the hardware, sampling
the inputs, computing the outputs, and interacting with any user interface is
no longer than the specified cycle time.

Xenomai provides several benchmark tests for system latencies. RTXI also has a
Performance Measurement module that determines average and worst case real-time
performance within RTXI. Maximal performance depends mostly on the motherboard
and supporting chipset, not as much on processor speed. Instead, the processor
determines the complexity of the models the system can solve within the
constraints of some underlying real-time computation rate. Faster processors
allow more instructions to be executed per computational cycle. For example, a
complex model may require too much computation to work on a 200MHz machine, but
will run at 20kHz on a 2GHz machine, even though a much simpler model runs at
50kHz on both. A slower processor simply cannot execute instructions in complex
models quickly enough.  

#### Measuring Performance  

The 'speed' of a platform usually refers to three attributes: time step,
jitter, and latency. The time step is the target period of the system. Ideally,
this value would be infinitesimal so that we would be able to acquire and
output all possible frequencies; however, that cannot be realized in practice
because a set amount of processing time is needed for input-output
calculations. This set time provides a lower bound for overall computation
time, but systems get pulled away from it due to the costs mentioned earlier.
Essentially, the actual observable time step is a random variable centered
about a mean target time step. The second term, jitter, describes the variation
around the mean, and is a direct result of the non-deterministic nature of
modern computer architectures (e.g. cache misses, bus contention, and
super-scalar execution). Typically, solutions based on general purpose
operating systems will always suffer from high levels of jitter because the
underlying system is designed to distribute clock cycles fairly among many
competing processes. Latency, the time between receiving an input and updating
the corresponding physical output channel roughly determines the lower bound on
time step. Latency exists because it takes a finite amount of time to perform
analog to digital conversion, do some computation, and convert back from
digital to analog.  
