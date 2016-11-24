---
title: Posting Bugs and Issues on GitHub
layout: post
categories: docs troubleshoot
---

RTXI is in active development, and our work depends heavily on user feedback.
This tutorial provides instructions for creating bug reports, posting questions
about issues, making feature requests, etc. through GitHub. Though email will
also work, we strongly encourage using GitHub so that users can see existing
issues and contribute to overall discussion. To use GitHub, you will need to
create a [GitHub account](https://github.com/join).  

**Note:** For the sake of absolute clarity, please do not actually create an
issue in the process of going though this tutorial.  

#### 1. Navigate to the repository.
<div class="row">
  <div class="col-md-8 col-xs-12"> 
    Go to our GitHub page (
    <a href="https://github.com/rtxi">https://github.com/rtxi</a>). On the page,
    use the search bar or scroll down until you find the software you want to
    report.  If you experience a bug within RTXI and its built-in modules, look
    for the <code>rtxi</code> repository. If it's a module you have problems
    with, find the repository that correponds to the module name. Also, if
    you have questions about anything on this website, go to the
    <code>rtxi.github.io</code> repository.  
    <div>&nbsp;</div>
  </div>
  <div class="col-md-4 col-xs-12">
    <div class="row">
      <div class="col-xs-10 col-xs-offset-1 col-md-12 col-md-offset-0">
        <a href="/assets/img/tutorials/rtxi-github-main-page.png">
          <img src="/assets/img/tutorials/rtxi-github-main-page.png" 
               class="img-responsive">
        </a>
      </div>
    </div>
  </div>
</div>

#### 2. Open an issue on the repository page.  
Each module has an issue page where you can view, submit, and comment on
current development issues. Pictured is the repository page for `rtxi`. To
navigate to its issues page, click on `Issues` on the right sidebar.  

Click on `Issues`. It's on the sidebar to the right. If you haven't logged in
to GitHub already, you will be prompted to now. This will open up a new page
that shows all the issues posted to the repository. Look through them to see if
the issue you are having is related to something someone else posted. If it is,
you can add to the existing discussion. If not, then open up a new issue.  

<div class="row">
  <div class="col-xs-12 col-sm-6 col-md-5 col-md-offset-1">
    <a href="/assets/img/tutorials/rtxi-github-rtxi-page.png">
      <img src="/assets/img/tutorials/rtxi-github-rtxi-page.png" 
           class="img-responsive">
    </a>
  </div>
  <div class="col-sm-6 col-xs-12 col-md-5">
    <a href="/assets/img/tutorials/rtxi-github-rtxi-issues.png"><figure>
      <img src="/assets/img/tutorials/rtxi-github-rtxi-issues.png" 
           class="img-responsive">
    </figure></a>
  </div>
</div>

#### 3. Write up your issue. 
Click the appropriate button for whether you're opening a new issue or joining
an existing thread. Please be as clear and detailed as possible in your
comments, as only posting things like "RTXI is crashing" or "X isn't working"
doesn't help us figure out what the issue is.  

For your posts, we ask (but don't require) you do provide the following
information when appropriate:  

1. **The version of RTXI you are using.**  If you used a live CD to install
   RTXI, just say that. If you compiled from source, go to your clone of the
   RTXI repository and run `git log`. The most recent commit will have a string
   associated with it that looks like a random list of letters. Give us the
   string.  
2. **Error messages from RTXI in the terminal.** If there are no error
   messages, no problem. If RTXI is crashing, it would be incredibly helpful if
   you used `gdb` to provide a backtrace.  
3. **A clear description of the bug.** Describe the behavior you expect, the
   behavior that is happening, and the set of steps that trigger the error.  

Clear issue postings are incredibly helpful for us to start debugging your
issues, and it also helps anyone else fully understand the issues you have.  
