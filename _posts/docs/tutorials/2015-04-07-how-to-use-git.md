---
title: How to Use Git
layout: docpost
categories: docs tutorials
---

Below are instructions for installing and using Git. Git is a version control tool that enables users to track revisions and changes in files and coordinate with collaborators. It is often used for software development. 

Unlike many applications, such as Microsoft Word, editing and saving files overwrites data. This makes it difficult to track changes without creating different file names, a process that can get messy very quickly. 

Git takes snapshots of files a user wants to track and maintains a history of changes that have occurred. This makes backtracking and checking revisions a simple process, which is especially helpful for large projects with many developers. It also functions as a collaborative tool by enabling users to make local copies of a common project and modify them as needed. Users track their own changes and those of others, and Git incorporates tools that enable branching and merging of whatever changes people make.  

<a href="http://www.phdcomics.com/comics/archive/phd101212s.gif" class="thumbnail">
	<img src="http://www.phdcomics.com/comics/archive/phd101212s.gif" class="img-responsive" style="max-height:400px; float:right; margin:10px;">
</a>


**Note:** Installing git is not the same as using GitHub. GitHub uses git, but it is a remote server that users can use as a central location for storing data. See the instructions for [opening a GitHub account](https://github.com/join).  

####Install Git on Your Computer (Linux)

Open the terminal. You can do this from within the Applications menu in GNOME or by using the `CTRL+Alt+t` shortcut. Enter:  
{% highlight bash %}
$ sudo apt-get install git
{% endhighlight %}

**Note:** When telling people to enter icommands, it is common practice to use `$` at the start of each line to signify that it is to be entered in the terminal. Also, `#` is used to signify root permissions rather than having people enter `sudo`. In either case, you DO NOT have to enter `$` or `#` in the terminal. For example, in the above command. just enter the text "sudo apt-get install git" and hit `ENTER`.  

Once Git is installed, configure it with your username and/or email address. This is preferred in development scenarios so that everyone can identify what modifications were made by which user. GitHub also maps Git user email addresses to GitHub accounts. Note that you do not have to give your real name. Any name will do, as all that is needed is a way to identify who has done what. Technically, Git does not check email address validity, either, but for collaborate work, it is best to provide some address so that people can ask each other questions about changes. 
{% highlight bash %}
$ git config --global user.name 'Your name here'
$ git config --global user.email your@address.here
{% endhighlight %}

The `git` part of each command specifies that the script that follows contains Git commands. Git provides a library of functions for executing version control. Rather than have them directly incorporated into system libraries, they are made accessible by preceding the command with `git`. Therefore, these commands and all other git commands we will use start with `git`. 

The second part, `config`, is used to configure information, which is stored in a hidden file. The tag `--global` means that the changes to the user configuration are to affect all user repositories. The details are saved in a hidden file called .gitconfig stored at the base of the user's home directory (`~/.gitconfig`). Other options allow for different scopes of the effects of configuration changes. `--local` is the default behavior and specifies that changes be written to hidden file in the working directory called `.git/config`. You can see what has been set in the config files by running `git config --list`.

**Note:** Should you ever need help with a Git command, you can use `git help <commandname>` to check the Git documentation in the terminal. For example, if unsure about `config`, run `git help config`.  
