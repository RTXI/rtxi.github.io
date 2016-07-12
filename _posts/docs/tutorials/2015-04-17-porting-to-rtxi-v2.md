---
title: Porting to RTXI v2.0
categories: docs tutorials
layout: docpost
---

RTXI v2.0 has been in development for a while, and its release will introduce many changes in the current v1.4 release. Most of these changes should have a limited impact on your modules, but even in that case, you will need to make some edits to your code to port it to v2.0. This tutorial will focus on some common changes that should cover most use-cases. The changes mostly have to do with:    
 
1. Upgrading from Qt3 to Qt4  
2. Upgrading Qwt5 to Qwt6  
3. Changes to the DefaultGUIModel class

#### Upgrading from Qt3 to Qt4
Qt3 is an old version of the Qt library. It was released in 2001 and superceded by Qt4 in 2005. It introduced many breaking changes to its API and classes, so it's taken a while to upgrade RTXI's codebase to properly use Qt4. We recommend that you look through the documentation Nokia provides on its website for porting from Qt3 to Qt4: [http://doc.qt.io/qt-4.8/porting4.html](http://doc.qt.io/qt-4.8/porting4.html).  

#### Porting Modules that Abstract from `DefaultGUIModel`
For v2.0, the code exposed to users has been simplified and the customizability enhanced. The most significant change is in the `createGUI` function and how the UI is generated. There are also some simple changes that correspond to syntax and class name changes in Qt4. They are as follows:  

**1. Change `#includes`**  
Libraries for Qt4 are included differently. To include them directly, change the names as indicated in the Qt4 documentation. For example, `<qpushbutton.h>` becomes `<QPushButton>`. Look through the Qt4 documentation to see what the name changes are. Another, simpler option is to just remove all the q\* includes and replace them with `<QtGui>`. `QtGui` will make Qt pull in all the libraries needed to compile whatever Qt classes are present in the code without the need to specify them directly.  

Essentially, something like:
{% highlight cpp %}
#include <main_window.h>
#include <qgridview.h>
#include <qhbox.h>
#include <qhbuttongroup.h>
#include <qlabel.h>
#include <qlayout.h>
#include <qpushbutton.h>
#include <qtimer.h>
#include <qtooltip.h>
#include <qvalidator.h>
#include <qvbox.h>
#include <qwhatsthis.h>
{% endhighlight %}
<div style="text-align:center;">becomes<br>&nbsp;</div>
{% highlight cpp %}
#include <main_window.h>
#include <QtGui>
{% endhighlight %}

<div>&nbsp;</div>
**2. Change `QWhatsThis`**  
This call is made by default in the constructors of module classes that abstract from DefaultGUIModel. Change:  
{% highlight cpp %}
QWhatsThis::add(this, "text");
{% endhighlight %}
<div style="text-align:center;">to<br>&nbsp;</div>
{% highlight cpp %}
setWhatsThis("text");
{% endhighlight %}

<div>&nbsp;</div>
**3. Add a resize timer**  
At the end of the contructor, after the module has been built and the `refresh` function has been called, add the line:  
{% highlight cpp %}
QTimer::singleShot(0, this, SLOT(resizeMe()));
{% endhighlight %}

<div>&nbsp;</div>
**4. Switch to `createGUI + customizeGUI` API**  
In v1.4, the GUI is created using DefaultGUIModel's `createGUI` function. If you wanted to add any custom elements, you had to overload the function and copy/paste the code in the `default_gui_model.cpp` and then add your own stuff. That's changed now.  

You no longer should overload the `createGUI` function. Now, just call DefaultGUIModel's `createGUI` function and then call a new function, `customizeGUI`, to, well, customize it. 

Define `customizeGUI` within the modules you are building. Call it **after** `createGUI` returns. To use `customizeGUI` properly, you need to do:  

<ol>
	<li><p>Grab the module layout object created by <code>createGUI</code>:  </p>
{% highlight cpp %}
QGridLayout *customLayout = DefaultGUIModel::getLayout();
{% endhighlight %}
	</li>
	<li><p>Add custom elements to the layout. For more explanation about this, see the example <code>customizeGUI</code> function defined in the plugin template. <br>  
	<a href="/docs/tutorials/2015/04/15/understanding-plugin-template/">http://rtxi.org/docs/tutorials/2015/04/15/understanding-plugin-template/</a></p>
	</li>
	<li><p>Set the edited layout.  </p>
{% highlight cpp %}
setLayout(customLayout);
{% endhighlight %}
	</li>
</ol>

<div>&nbsp;</div>
**5. Enforce types for get/set methods on RTXI workspace variables**  
RTXI workspace variables are displayed in the UI as `QStrings`, and within the code they are regularly converted to the native types they are supposed to represent in memory, such as `int`, `double`, and `string`. v2.0 should take the calls in v1.4 without issue, but if you run into problems, check the types of the variables you are using.  

**Note:** v2.0 **does not** support strings for `PARAMETER` variables. Use the `COMMENT` type instead.  
