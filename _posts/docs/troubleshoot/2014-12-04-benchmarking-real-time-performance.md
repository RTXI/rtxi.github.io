---
title: Benchmarking Real-time Performance
layout: docpost
categories: docs troubleshoot
---

Here is a list of tools for benchmarking real-time performance, both for the operating system and for the RTXI application itself. In general, you should use these to test newly installed kernels, but you can also use them to help diagnose performance issues experienced when running RTXI.  

###Xenomai-based Tests
Xenomai comes with benchmarking tools for both real-time and user-space kernels. They are accessible from `/usr/xenomai/bin`   

**Latency Test**  
This test will verify the overall performance of your system and is the best indicator of your real-time performance. It will immediately let you know if you have successfully installed a correctly functioning real-time kernel. In oneshot mode, it measures the difference in time between the expected switch time and the time when a task is actually called by the scheduler. This test prints one line every second and gives you the minimum, average, and maximum latencies for that period as well the minimum and maximum overall latencies that occurred over the entire test. Open up some other programs, copy some files from one location to another, and load the network connection to see how it affects the latency. You should find slightly higher latencies with the user space test than the kernel space test. Your real-time performance is limited by the maximum latency (lat max) you can achieve and you generally don’t want to be doing other tasks. You also should not see any overruns, which occurs when the latency completely exceeds your nominal period. Negative time in the latency test is due to the fact that RTAI performs a calibration at startup that tries to minimize the jitter in the real-time task and anticipates the call.  

If you periodically see an overrun (perhaps every 64 seconds) that results in a maximum latency of several hundred microseconds, you may have an SMI (System Maintenance Interrupt) issue. This feature can be found on certain chipsets e.g. Intel 82845 845. Disabling SMI can cause some computers to overheat and may damage those computers. Other “latency killers” are: heavy DMA activities (using the hard disk), using an accelerated X-server, USB legacy support, power management (APM and ACPI), and CPU frequency scaling. If you have disabled all of these in the kernel already, check your BIOS and see if you can disable them there.  

**Preempt Test**  
This test is a stress utility that verifies the real-time schedulers under heavy processing load. This software combines the latency calibration task with a fast and slow task to have two levels of preemption.  

**Switch Test**  
This test provides information about the maximum amount of time RTAI needs to disable interrupts. The test uses a repeated sequence of suspend/resume and semaphore signal/wait calls under a heavy processing load. The switching time should be less than the maximum latency time. The real latency limitation is seldom due to RTAI but an intrinsic drawback of using a general purpose CPU for real-time applications.  

###RTXI-based Tests  
Internal RTXI performance benchmarks are still in development. Currently, the performance\_measurement module can be used to track the accumulated average cycle time and the accumulated average computation time and compare them to the nominal real-time period.  

The performance measurement module is included in RTXI by default, under the System heading in the menubar. Running it while running modules versus nothing else will show you the performance cost your modules. If you see high computation times relative to your real-time period, consider increading your RT period or simplifying your module(s). 
