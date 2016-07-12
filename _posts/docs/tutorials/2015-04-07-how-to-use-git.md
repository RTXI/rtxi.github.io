---
title: How to Use Git
layout: docpost
categories: docs tutorials
---

Below are instructions for installing and using Git. Git is a version control tool that enables users to track revisions and changes in files and coordinate with collaborators. It is often used for software development. 

Unlike many applications, such as Microsoft Word, editing and saving files overwrites data. This makes it difficult to track changes without creating different file names, a process that can get messy very quickly. 

Git takes snapshots of files a user wants to track and maintains a history of changes that have occurred. This makes backtracking and checking revisions a simple process, which is especially helpful for large projects with many developers. It also functions as a collaborative tool by enabling users to make local copies of a common project and modify them as needed. Users track their own changes and those of others, and Git incorporates tools that enable branching and merging of whatever changes people make.  

<a href="http://www.phdcomics.com/comics/archive/phd101212s.gif">
	<img src="http://www.phdcomics.com/comics/archive/phd101212s.gif" class="img-responsive" style="max-height:400px; float:right; margin:10px;">
</a>


**Note:** Installing git is not the same as using GitHub. GitHub uses git, but it is a remote server that users can use as a central location for storing data. See the instructions for [opening a GitHub account](https://github.com/join).  

#### Installing Git on Linux

Open the terminal. You can do this from within the Applications menu in GNOME or by using the `CTRL+Alt+t` shortcut. Enter:  
{% highlight bash %}
$ sudo apt-get install git
{% endhighlight %}

**Note:** When telling people to enter commands, it is common practice to use `$` at the start of each line to signify that it is to be entered in the terminal. Also, `#` is used to signify root permissions rather than having people enter `sudo`. In either case, you DO NOT have to enter `$` or `#` in the terminal. For example, in the above command. just enter the text `sudo apt-get install git` and hit `ENTER`.  

Once Git is installed, configure it with your username and/or email address. This is preferred in development scenarios so that everyone can identify what modifications were made by which user. GitHub also maps Git user email addresses to GitHub accounts. Note that you do not have to give your real name. Any name will do, as all that is needed is a way to identify who has done what. Technically, Git does not check email address validity, either, but for collaborate work, it is best to provide some address so that people can ask each other questions about changes. 
{% highlight bash %}
$ git config --global user.name 'Your name here'
$ git config --global user.email your@address.here
{% endhighlight %}

The `git` part of each command specifies that the script that follows contains Git commands. Git provides a library of functions for executing version control. Rather than have them directly incorporated into system libraries, they are made accessible by preceding the command with `git`. Therefore, these commands and all other git commands we will use start with `git`. 

The second part, `config`, is used to configure information, which is stored in a hidden file. The tag `--global` means that the changes to the user configuration are to affect all user repositories. The details are saved in a hidden file called .gitconfig stored at the base of the user's home directory (`~/.gitconfig`). Other options allow for different scopes of the effects of configuration changes. `--local` is the default behavior and specifies that changes be written to hidden file in the working directory called `.git/config`. You can see what has been set in the config files by running `git config --list`.

**Note:** Should you ever need help with a Git command, you can use `git help <commandname>` to check the Git documentation in the terminal. For example, if unsure about `config`, run `git help config`.  

### Using Local Repositories

#### Initialization 

Git enables users to track local changes and development paths. First, go the base of your home directory and create some new directories:  
{% highlight bash %}
$ cd ~/
$ mkdir plugins
$ cd plugins
$ mkdir practice
$ cd practice
$ cd ..
{% endhighlight %}

Now, from within the plugins directory, run:
{% highlight bash %}
$ git init
{% endhighlight %}

<!--
<a href="/assets/img/tutorials/git-tutorial-1.png">
	<img src="/assets/img/tutorials/git-tutorial-1.png" class="img-responsive">
</a>
-->

This command specifies that the directory is to be treated as a Git repository. By default, Git does not track *any* files. User must enable it in a directory of their choosing. Once executed, this function creates a hidden directory called `.git/` that stores information regarding the repository contained in the directory. 

<!--
<a href="/assets/img/tutorials/git-tutorial-2.png">
	<img src="/assets/img/tutorials/git-tutorial-2.png" class="img-responsive">
</a>
-->

**Note:** Git exists as a version control system. It is not advisable to use it for backing up big files, such as videos, binaries, etc. The entire process gets encumbered quickly. 

#### <a name="add"></a>Adding Files to the Staging Area 

The directory is currently empty, so create some files:
{% highlight bash %}
$ touch file1.txt
$ touch file2.txt
$ touch file3.txt
{% endhighlight %}

These files have been added to the repository, or in Git terminology, the **working tree**. The working tree refers to all of the files that originate from the base of the directory, which in this case is `~/plugins`. 

By default, Git does not track files that are added to the directory. Users have to specify that they be tracked. This is done by the `add` command. Git does, though tell what files are and are not being tracked. Simply use `git status`

{% highlight bash %}
$ git add file1.txt file2.txt file3.txt
{% endhighlight %}

`git add` adds the files to what is called the **staging area**. Basically, this command generates a snapshot of the files and stores them without adding them to the permanent version history. In other words, Git is aware of the files, but it has not added them to the permanent version history. Basically, git has a 2-stage revision process. The first is to send modified or new files to the staging area, and the second is to commit them to the permanent version history. This has its advantages in that it enables users to add files to a repository as a group that together functions properly. Reverting from one set of changes to another is simply a process of switching to another snapshot in the permanent history. This process is explained later. 

To show what files are in the stating area, use:
{% highlight bash %}
$ git status
{% endhighlight %}

<!--
<a href="/assets/img/tutorials/git-tutorial-3.png">
	<img src="/assets/img/tutorials/git-tutorial-3.png" class="img-responsive">
</a>
-->

If needed, it is possible to unstage files that were added with `git add`. Git gives the user the command 
`git rm --cached <filename>`. Try it on one of the files and see the changes made to the staging area. 
{% highlight bash %}
$ git rm --cached file1.txt
$ git status
{% endhighlight %}

<!--
<a href="/assets/img/tutorials/git-tutorial-4.png">
	<img src="/assets/img/tutorials/git-tutorial-4.png" class="img-responsive">
</a>
-->

The following assumes that all three files are added to the staging area. You can add all files to the staging area by running `git add -A`. 

#### <a name="commit"></a>Commiting Files 

With the files added to the staging area, the next step is to add them to the permanent version history. In Git, this process is called a **commit**. Use the `commit` command. 
{% highlight bash %}
$ git commit file1.txt file2.txt file3.txt -m "First commit"
{% endhighlight %}

The `commit` command adds files in the staging area to the repository. Each commit requires a message that is intended to describe the changes that took place. This can be done in the command line by using `-m` followed by the message in quotation marks. If this is omitted, Git defaults to a text editor where users can type the message. The `commit` command is completed when the user saves the message and exits the editor.  

If you opt to not specify the filenames for the commit, git will commit all the files in the staging area.  

Because all the files in the staging area were committed in the last command, there are all removed from the staging area. You can check with `git status`.  

The version history is in essence a list of commits. To view the complete history of the project, use:
{% highlight bash %}
$ git log
{% endhighlight %}

This outputs a list of all the commits, when they were made, the author, the commit messages, and other information. The string at the top of seemingly random letters is an encrypted hash of the changes that were made. A hash is a string that encodes data and is produced by a hash function. Ideally, a hash function is implemented such that a small change in the data it encodes results in a large, unpredictable change in the hash. This enables users to check the file's integrity and makes it exceedingly difficult to alter the commit history.  

<!--
<a href="/assets/img/tutorials/git-tutorial-5.png">
	<img src="/assets/img/tutorials/git-tutorial-5.png" class="img-responsive">
</a>
-->

#### <a name="undo"></a>(Optional) Undo a Commit 

If you ever commit something and wish to revert your changes, use the `reset` command. There are several options. The first is:
{% highlight bash %}
$ git reset --hard HEAD~1
{% endhighlight %}

This command erases **everything** that was altered after the previous commit and sets the working tree to the previous commit. The `--hard` induces the erasure, and `HEAD~1` moves to the previous commit. `HEAD` is a pointer that Git uses to point to a specific commit in a branch. `HEAD` by default points to the latest commit, so to access previous ones, use `~X` where X is the number of commits ago you want to go. 

Be very careful when using `--hard`. 

The second option:
{% highlight bash %}
$ git reset --mixed HEAD~1
{% endhighlight %}
-OR-
{% highlight bash %}
$ git reset HEAD~1
{% endhighlight %}

This file preserves the changes made but reverts the HEAD pointer back one commit. The changes are unstaged, so the working directory matches the previous commit. 

The last option:
{% highlight bash %}
$ git reset --soft HEAD~1
{% endhighlight %}

The only change is that the most recent commit is reversed. The staging area is the same; it reflects the changes that have been made between the commit to be erased and its predecessor. This option exactly reverses the effects of a `git commit` command. 

The following assumes that the commit has not been reversed. All three files are committed in the repository. 

#### <a name="branch"></a>Branching Repositories 

Now that a commit has been made, branch off and create a new working tree. Currently, HEAD points to the last commit of the original branch, called `master`. This is the default name for a new git repository. It is generally best practice to branch off of master to make changes and then merge changes back to master once they have been thoroughly audited. That way, whatever code is in the master branch is guaranteed to work.  

Create a branch called `testing`:
{% highlight bash %}
$ git branch testing
{% endhighlight %}

This creates a new branch called `testing`. By default, it copies the state pointed to by HEAD, but it is possible to branch off of previous commits. To list the available branches, use `git branch`. To switch to the newly created branch, use:  

{% highlight bash %}
$ git checkout testing
{% endhighlight %}

Now, HEAD is pointing to `testing` instead of `master`. Any commits made will be applied to `testing` as long as it is checked out. 

<!--
<a href="/assets/img/tutorials/git-tutorial-6.png">
	<img src="/assets/img/tutorials/git-tutorial-6.png" class="img-responsive">
</a>
-->

#### <a name="commitbranch"></a>Commiting Branches 

Change the current files. This command will add text to the files saying, "This is <filename>". You can use `more <filename>` or `cat <filename>` to output the contents of a file into the terminal. 
{% highlight bash %}
$ find . -maxdepth 1 -type f | xargs -I {} bash -c "echo 'This is '{} > {}"
{% endhighlight %}

Now that the files have been altered, run `git status` to see what Git has noticed. Stage the changes and commit them:
{% highlight bash %}
$ git add .
$ git commit . -m "First Branch Commit"
{% endhighlight %}

The `.` operator causes commands to affect all files in a directory. Using it is easier than typing individual file names. 

<!--
<a href="/assets/img/tutorials/git-tutorial-7.png">
	<img src="/assets/img/tutorials/git-tutorial-7.png" class="img-responsive">
</a>
-->

#### <a name="compare"></a>Comparing Branches 

Now that `master` and `testing` differ with one another, switch between them to see the differences.
{% highlight bash %}
$ ls | xargs cat
$ git checkout master
$ ls | xargs cat
{% endhighlight %}

Individually looking through files in different branches can be cumbersome. To output the differences directly, use the `diff` command. 

{% highlight bash %}
$ git diff master testing
{% endhighlight %}

The output should look like:

<!--
<a href="/assets/img/tutorials/git-tutorial-8.png">
	<img src="/assets/img/tutorials/git-tutorial-8.png" class="img-responsive">
</a>
-->

#### <a name="merge"></a>Merging Branches 

Now, merge the changes in `testing` to `master`. Check out the `master` branch and use the `merge` command.
{% highlight bash %}
$ git checkout master
$ git merge testing
{% endhighlight %}

You will see an output that summarizes the changes. The `merge` command creates a new commit that follows the previous version of `master`. 

<!--
<a href="/assets/img/tutorials/git-tutorial-9.png">
	<img src="/assets/img/tutorials/git-tutorial-9.png" class="img-responsive">
</a>
-->

If the merge is successful, there is no need for the `testing` branch. Delete it. Make sure that the `testing` branch isn't currently checked out.  
{% highlight bash %}
$ git branch -d testing
{% endhighlight %}

### <a name="rrepos"></a>Using Remote Repositories 

Remote repositories refer to storage locations outside a user's local repository. The remote in this example is GitHub, and the repository we'll be using is for the <a href="https://github.com/rtxi/plugin-template">plugin template</a>. If you want to have your own remote repository on GitHub, you will need to create an account with them and using their website to initialize the repository. 

#### <a name="clone"></a>Cloning a GitHub Repository  

The format for cloning repositories from GitHub is: 
{% highlight bash %}
$ git clone https://github.com/<username>/<repository-name>.git
{% endhighlight %}

To clone from our repositories, the username is `rtxi` and the repositories are all listed on https://github.com/rtxi. To install the plugin template:  
{% highlight bash %}
$ cd ~/ # this line isn't really needed
$ git clone https://github.com/rtxi/plugin-template.git
$ cd plugin-template
{% endhighlight %}

In addition to the files copied from GitHub, Git stores the address of the remote repository. By default, the name is `origin`. See details on remote repositories with `git remote -v`. 

#### <a name="push"></a>Pushing to a Remote 

Make some changes to the directory. Add some files, edit them, etc. Then, stage and commit them. 
{% highlight bash %}
$ touch file1 file2 file3
$ git add .
$ git commit . "Local commit to push to remote repository"
{% endhighlight %}

**Note:** You will not actually be able to execute the command below successfully. We don't allow everyone to push to our repositories. This is what you'd do, though, if you could. 

Now, send these changes to the remote. The command Git uses for this is `push`. 
{% highlight bash %}
$ git push https://github.com/<username>/plugin-template.git master # will fail
{% endhighlight %}

Git pushes the changes to the master branch of the remote repository referenced by the URL. Git also supports aliases for remote URLs. By default, the URL from which you clone a repository is saved as `origin`. You can view the remotes tracked by a repository by running `git remote -v`.  

#### <a name="pull"></a>Pulling Changes from a Remote 

Just as one can push changes from a local machine to a remote, it is possible to 'pull' changes back from the remote to the local machine. This comes into play when modifying the same project on several machines or by several people. To pull the code and automatically merge the differences, use:
{% highlight bash %}
$ git pull origin
{% endhighlight %}

If you want to observe the changes but not merge them, use:
{% highlight bash %}
$ git fetch origin
{% endhighlight %}
This command fetches the changes from the remote repository for the user to compare with files on the local machine. Once they are determined to be safe for merging, enter the following from within the directory to which changes are to be merged:
{% highlight bash %}
$ git merge <fetchedremote>
{% endhighlight %}

You can use this method to keep your modules and RTXI up to date.  

### <a name="summary"></a>Summary 

The above tutorial is a very basic introduction to Git. Git has many functions, and many of them overlap in their functionality. As such, there are often many ways to implement what was described above.  

Should you need more detail, the [Git documentation](http://git-scm.com/documentation) is an excellent place to start. Additional help can be found throughout the web:  
 - An [interactive tutorial](http://try.github.io/levels/1/challenges/1) for Git syntax.  
 - A [user-made tutorial](http://www.vogella.com/tutorials/Git/article.html)  
 - A detailed site by Atlassian with [tutorials on Git and workflow](https://www.atlassian.com/git/)  
