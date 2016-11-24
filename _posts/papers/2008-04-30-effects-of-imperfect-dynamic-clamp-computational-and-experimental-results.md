---
title: "Effects of Imperfect Dynamic Clamp: Computational and Experimental
Results"
layout: post
categories: papers

reference: "Bettencourt J.C., Lillis K.P., Stupin L.R., White J.A. Effects of
imperfect dynamic clamp: Computational and experimental results (2008) Journal
of Neuroscience Methods, 169 (2): 282-289."
authors: 
 - name: Jonathan Bettencourt
 - name: Lillis
 - name: Stupin
 - name: John White
link: http://dx.doi.org/10.1016/j.jneumeth.2007.10.009
---

In the dynamic clamp technique, a typically nonlinear feedback system delivers
electrical current to an excitable cell that represents the actions of
“virtual” ion channels (e.g., channels that are gated by local membrane
potential or by electrical activity in neighboring biological or virtual
neurons). Since the conception of this technique, there have been a number of
different implementations of dynamic clamp systems, each with differing levels
of flexibility and performance. Embedded hardware-based systems typically offer
feedback that is very fast and precisely timed, but these systems are often
expensive and sometimes inflexible. PC-based systems, on the other hand, allow
the user to write software that defines an arbitrarily complex feedback system,
but real-time performance in PC-based systems can be deteriorated by imperfect
real-time performance. Here, we systematically evaluate the performance
requirements for artificial dynamic clamp knock-in of transient sodium and
delayed rectifier potassium conductances. Specifically, we examine the effects
of controller time step duration, differential equation integration method,
jitter (variability in time step), and latency (the time lag from reading
inputs to updating outputs). Each of these control system flaws is artificially
introduced in both simulated and real dynamic clamp experiments. We demonstrate
that each of these errors affect dynamic clamp accuracy in a way that depends
on the time constants and stiffness of the differential equations being solved.
In simulations, time steps above 0.2 ms lead to catastrophic alteration of
spike shape, but the frequency–current relationship is much more robust.
Latency (the part of the time step that occurs between measuring membrane
potential and injecting re-calculated membrane current) is a crucial factor as
well. Experimental data are substantially more sensitive to inaccuracies than
simulated data.
