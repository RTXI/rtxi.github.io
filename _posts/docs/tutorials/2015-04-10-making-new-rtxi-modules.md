---
title: Making New Modules in RTXI
categories: docs tutorials
layout: post
---

Outlined here is the development process for making new RTXI modules. For
simplicity, we provide a template module, called Plugin Template, for users to
customize without needing to writing everything from scratch. Plugin Template
defines a basic GUI with customizable widgets and is found [on our GitHub
repository](https://github.com/rtxi/plugin-template).   


### To fork RTXI modules:  

#### 1. Clone the repository from GitHub.   
From our site, go to the [Plugin-Template
repository](https://github.com/rtxi/plugin-template). Download the source
files:  

Now, clone the repository. Developers for new modules are expected to base it
on MyPluginGUI. Type:  

{% highlight bash %}
$ git clone https://github.com/rtxi/plugin-template.git custom_module
{% endhighlight %}

`custom_module` is the name of the directory git will create when downloading
the source code. You can change it to whatever you want. If you don't specify a
name, it will default to `plugin-template`, the name of the repository on
GitHub.  

Once the module is downloaded, look inside the new directory for Plugin
Template's source code. An explanation of the header and source files is
available in the our [user
manual](http://rtxi.org/docs/manual/#customizing_gui).  

#### 2. Modify files.  
Modify the RTXI files to run the code you want. When you compile and install
your module, be sure to rename the source files and classes to something other
than `plugin-template` or `PluginTemplate`, respectively. It's preferable to
name it  something that reflects what it does. A quick and easy way to change
the names of the files, classes, and binary is to use the `sed` and `mv`
commands. A wrapper script called `rename_module.sh` is provided in the
plugin-template repository. 

{% highlight bash %}
$ ./rename_module.sh
{% endhighlight %}

Additionally, it's good practice to document your code. As a general rule,
document it so that you're confident that anyone with programming experience
will be able to understand what your code and overall module do. Within the
plugin-template repository, there is another script called `build_readme.sh`.
It parses your source file and generates a readme from it.  

{% highlight bash %}
$ ./build_readme.sh
{% endhighlight %}

The script assumes that the name of your source file matches the directory
name, so it will look for and parse <custom_module.cpp> if the directory is
called <custom_module>. 

#### 3. Compile and install. 

Once you're ready to compile and install your module, go to the base of your
module directory and execute:  

{% highlight bash %}
$ make 
$ sudo make install 
{% endhighlight %}
