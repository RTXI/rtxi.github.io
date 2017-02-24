---
title: "Cell-Specific Cardiac Electrophysiology Models"
layout: post
categories: papers

reference: 'Groenendaal W, Ortega FA, Kherlopian AR, Zygmunt AC, Krogh-Madsen T, Christini DJ. Cell-specific cardiac electrophysiology models. PLoS Comput Biol. 2015 Apr 30;11(4):e1004242.'
authors: 
 - name: Willemijn Groenendaal
 - name: Francis Ortega
 - name: Armen Kherlopian
 - name: Andrew Zygmunt
 - name: Trine Krogh-Madsen
 - name: David Christini
link: "http://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1004242"
---

The traditional cardiac model-building paradigm involves constructing a composite model using data collected from many cells. Equations are derived for each relevant cellular component (e.g., ion channel, exchanger) independently. After the equations for all components are combined to form the composite model, a subset of parameters is tuned, often arbitrarily and by hand, until the model output matches a target objective, such as an action potential. Unfortunately, such models often fail to accurately simulate behavior that is dynamically dissimilar (e.g., arrhythmia) to the simple target objective to which the model was fit. In this study, we develop a new approach in which data are collected via a series of complex electrophysiology protocols from single cardiac myocytes and then used to tune model parameters via a parallel fitting method known as a genetic algorithm (GA). The dynamical complexity of the electrophysiological data, which can only be fit by an automated method such as a GA, leads to more accurately parameterized models that can simulate rich cardiac dynamics. The feasibility of the method is first validated computationally, after which it is used to develop models of isolated guinea pig ventricular myocytes that simulate the electrophysiological dynamics significantly better than does a standard guinea pig model. In addition to improving model fidelity generally, this approach can be used to generate a cell-specific model. By so doing, the approach may be useful in applications ranging from studying the implications of cell-to-cell variability to the prediction of intersubject differences in response to pharmacological treatment.
