---
title: Porting to RTXI v2.0
categories: docs tutorials
layout: docpost
---

RTXI v2.0 has been in development for a while, and its release will introduce many changes in the current v1.4 release. Most of these changes should have a limited impact on your modules, but even in that case, you will need to make some edits to your code to port it to v2.0. This tutorial will focus on some common changes that should cover most use-cases. The changes mostly have to do with:    
 
1. Upgrading from Qt3 to Qt4  
2. Upgrading Qwt5 to Qwt6  
3. Changes to the DefaultGUIModel class

####Upgrading from Qt3 to Qt4
Qt3 is an old version of the Qt library. It was released in 2001 and superceded by Qt4 in 2005. It introduced many breaking changes to its API and classes, so it's taken a while to upgrade RTXI's codebase to properly use Qt4. We recommend that you look through the documentation Nokia provides on its website for porting from Qt3 to Qt4.  
[http://doc.qt.io/qt-4.8/porting4.html](http://doc.qt.io/qt-4.8/porting4.html)  

Now, here are some common changes that you should make to your code:  
