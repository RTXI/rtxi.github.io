---
title: Making New Modules in RTXI
categories: docs tutorials
layout: post
---

Outlined here is the development process for making new RTXI modules. For
simplicity, we provide a shell script, called create_template_plugin.sh, for users to
customize without needing to writing everything from scratch. You can access
this script under the scripts folder in RTXI's root directory. When run, it will create
a source directory with source files and cmake build file in the current directory.


### To create RTXI modules:  

#### 1. Generate the RTXI plugin project.   
Enter or create the directory where you wish to create the plugin, then run the following
command:

{% highlight bash %}
$ RTXI_SOURCE_LOCATION/scripts/create_template_plugin.sh 
{% endhighlight %}

where RTXI_SOURCE_LOCATION is the full directory path to RTXI's source code. Once you
run the script, the program will ask for a name and a description of your plugin. Afterwards
it will use this information to generate a widgets.hpp, widgets.cpp, and CMakeLists.txt.

The name of the directory created is the same as the name of the plugin.
An explanation of the header and source files is available in our 
[user manual](http://rtxi.org/docs/manual/#customizing_gui).  

#### 2. Modify files.  
Modify the RTXI files to run the code you want. The CMakeLists.txt file generated
will automatically search for the RTXI library, but you should modify it if there
are additional dependencies to your plugins. Check CMake and your library's documentation
on how to find and link the depenency.

Additionally, it's good practice to document your code. As a general rule,
document it so that you're confident that anyone with programming experience
will be able to understand what your code and overall module do.

#### 3. Configure, Compile, and install. 

Once you're ready to compile and install your module, go to the base of your
module directory and execute:  

{% highlight bash %}
$ cmake -S . -B build
$ cmake --build ./build
$ sudo cmake --install ./build
{% endhighlight %}
