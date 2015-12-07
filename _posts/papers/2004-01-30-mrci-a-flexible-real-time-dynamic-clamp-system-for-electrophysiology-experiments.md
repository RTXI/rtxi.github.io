---
title: "MRCI: a Flexible Real-time Dynamic Clamp System for Electrophysiology Experiments"
layout: paper
categories: papers

reference: "I. Raikov, A. Preyer and R.J. Butera, MRCI: a flexible real-time dynamic clamp system for electrophysiology experiments, J. Neurosci. Methods 132 (2004), pp. 109–123."
authors: 
 - name: Raikov
 - name: Preyer
 - name: Butera
link: http://dx.doi.org/10.1016/j.jneumeth.2003.08.002
---

We present a real-time simulation system that enables modeled dynamical systems to interact with physical experimental systems, and is specifically aimed towards execution of the dynamic clamp protocol. Model reference current injection (MRCI) operates under Real-Time Linux (RT-Linux or RTL) and provides a simple equation-oriented language for describing dynamical system models. Features include scripting of commands to implement repeatable protocols, the ability to output pre-computed waveforms through any variable or parameter of the model, the means to conduct time measurements and assess the computational performance of the real-time system, and an installation program that installs the software and accompanying device drivers with minimal input from the user. Tested models operate as fast as 30 kHz, with actual maximum rates dependent on model complexity. We present sample models that exhibit the main features of the modeling language. Experiments demonstrate the abilities of the system by creating a hybrid network of real and simulated neurons, and playing a pre-defined synaptic waveform into a synaptic conductance variable. We conclude by introducing a waveform reconstruction technique that is useful for establishing the presence of significant experimental error in implementations of the dynamic clamp protocol.
