---
title: RTXI HDF5 Data Files
layout: post
categories: docs tutorials
---

The HDF5 file format is a portable and extensible binary data format designed
for complex data. It features support for an unlimited variety of datatypes,
and has flexible and efficient I/O. HDF5 features a hierarchical structure that
allows you to access chunks of data without loading the entire file into
memory. An HDF5 file produced by RTXI's Data Recorder is organized as shown on
the right:  

<div class="container">
  <div class="col-sm-4">
    <a href="/assets/img/hdf5-rtxi.png">
      <img src="/assets/img/hdf5-rtxi.png" class="img-responsive">
    </a>
  </div>
  <div class="col-sm-8">
    <a href="/assets/img/hdf5-rtxi-2.png">
      <img src="/assets/img/hdf5-rtxi-2.png" class="img-responsive">
    </a>
  </div>
</div>

At the topmost level, an RTXI HDF5 file is divided into separate **Trial**
groups, each of which contains the complete set of system options, module
settings, and model parameter values that existed at the time that data was
recorded. Every time you stop and restart a module from which data is sent to
the Data Recorder, a new Trial is created. Each Trial is timestamped with a
start and end time. The Data Recorder also has the option to append trials to
an existing HDF5 file. For this reason, each Trial has its own data and system
attributes.  

The parameters for modules and all system settings are saved in the
**Parameters** group within each Trial group. The name of each parameter
includes the module ID number within RTXI, the name of the module, and the name
of the parameter itself. If the value of the parameter changes during
recording, all the values are saved with a corresponding index value that is
the timestamp in nanoseconds from the start of the recording.  

The real-time data is saved in the **Synchronous** group within each Trial
group. This group contains separate datasets with the name of each channel and
a single dataset that contains all the synchronous data.

There are various software available for working with HDF5 files. To simply
browse the file structure, you can use the free HDFView application. HDFView
provides some limited editing capabilities. For trials where only a single
channel is saved, you can also preview a plot of the data. To extract the data
for analysis and for complete editing capabilities, APIs are available for
MATLAB, GNU Octave, Igor Pro, Mathematica, Python, Scilab, and other software.
See this list maintained by the HDF Group.

We provide here a collection of MATLAB functions and a simple GUI for browsing
through the trials of an RTXI HDF5 file with addtional examples of how to
extract data and add new datasets to your file. **To load RTXI HDF5 files into
MATLAB, you no longer need to "matlabize" your HDF5 files, provided you use the
MATLAB functions from our 
<a href="https://github.com/rtxi/matlab-tools">matlab-tools repository</a>**
