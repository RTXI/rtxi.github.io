---
title: Editing the Plugin Template
categories: docs tutorials
layout: docpost
published: false
extra_css: "
<style>
.modal .modal-dialog { width: 90%; }
</style>
"
---

RTXI uses a modular structure to implement things in real time. Each module has a well-defined function that fits within a framework. We already provide many modules, both added on as modules and built-into RTXI. If you need to customize a module from scratch, we provide a template that simplifies the process so that no users touch the real-time framework, called the plugin template.  

The plugin template is stored in its own GitHub repository (<a href="https://github.com/rtxi/plugin-template">https://github.com/rtxi/plugin-template</a>). The following is a simple tutorial for editing the template. The main things it will do is:  

1. Edit the GUI.  
2. Implement something in real-time.  

This document is more focused on getting a module running within our plugin framework. It will not focus on what that framework is. For a description of what the plugin-template contains, and how to edit it, look through our documentation about it. (https://github.com/RTXI/tutorials/wiki/Plugin-Template-Base-Code)  

**Note:** The following relies on RTXI 2.0 and the Qt4 libraries. There are big changes in API between v2.0 and Qt4 and v1.4 and Qt3, respectively, but this tutorial should get you started for those versions, too. **Knowing C++ will also help.**  

### Editing the GUI
This section will add a third button to the UI and connect it to a function within the module. Use this as an example if you want to add buttons to trigger events in your module. Just keep in mind, as will be reiterated many, many, many, many times in this tutorial, **do not let the GUI directly alter real-time components**.   

#### 1. Clone the plugin template from GitHub.  
{% highlight bash %}
$ git clone https://github.com/rtxi/plugin-template.git
{% endhighlight %}

#### 2. Rename the files and class names (optional): 
{% highlight bash %}
$ sed -i 's/plugin_template/custom_plugin/g' Makefile plugin-template.cpp plugin-template.h
$ sed -i 's/PluginTemplate/CustomPlugin/g' Makefile plugin-template.cpp plugin-template.h
$ mv plugin-template.h custom-plugin.h
$ mv plugin-template.cpp custom-plugin.cpp
{% endhighlight %}

Strictly speaking, you don't have to do this. But for the remainder of this tutorial, the sources will be assumed to be custom-plugin.* and the module class to be CustomPlugin.   

#### 3. Edit the header file. 
<div class="row">
	<div class="col-xs-12 col-sm-4 col-sm-offset-2">
		<button type="button" data-toggle="modal" data-target="#button_before" class="btn btn-lg btn-danger center-block">
			Before
		</button>
	</div>
	<div class="col-xs-12 col-sm-4">
		<button type="button" data-toggle="modal" data-target="#button_after" class="btn btn-lg btn-danger center-block">
			After
		</button>
	</div>
</div>

<div class="modal fade" id="button_before" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modaltitle">
	<div class="modal-dialog"><div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h2 class="modal-title">plugin-template.h</h2>
		</div>
		<div class="modal-body">
			{% include plugin-template-h.html %}
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
		</div>
	</div></div>
</div>

<div class="modal fade" id="button_after" tabindex="-1" role="dialog" aria-hidden="true" aria-labelledby="modaltitle">
	<div class="modal-dialog"><div class="modal-content">
		<div class="modal-header">
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			<h2 class="modal-title">custom-plugin.h</h2>
		</div>
		<div class="modal-body">
			{% include plugin-template-cpp.html %}
		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
		</div>
	</div></div>
</div>
