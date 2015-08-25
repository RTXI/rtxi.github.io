###RTXI  

The sources of the RTXI website. 

**Requirements:** nodejs, ruby, bower, grunt, bundler  
**Limitations:** none  

####Downloading and Building the Site
If you want to build and edit the site on your own, you'll need to install some dependencies:  
````
$ sudo apt-get install nodejs ruby imagemagick libmagickwand-dev npm curl
````

Ruby is used for all the gems you need to use Jekyll to build the site. You can use the default gem, but I'd prefer you use RVM so that we an keep the ruby version consistent. It'll also save you a lot of pain when if have problems with gem compatibility.  

If you haven't already, set preferences for your terminal emulator so that it is a login shell. Otherwise, the RVM commands above won't work properly.  

I'm currently using v2.2.0. To install RVM (from their website): 
````
$ gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
$ curl -sSL https://get.rvm.io | bash -s stable --ruby
$ rvm install 2.2.0
$ rvm use 2.2.0
````
Now, you'll need to install the bundler gem:  
````
$ gem install bundler
````

Now, the node packages. On Ubuntu, for some reason, the default binary has an unrecognized name. npm looks for a binary called `node`, but the installed binary is called `nodejs`. Fix this by running:  
````
$ sudo ln -s /usr/bin/nodejs /usr/bin/node
````

Now, install the node packages (bower and grunt-cli):  
````
$ sudo npm -g install bower grunt-cli
````

Now, you need to install the website's dependencies. This is done in the website directory. Clone the website and switch to the 'build' branch:  
````
$ git clone https://github.com/rtxi/rtxi.github.io website
$ cd website
$ git checkout build
````

Initialize the site with the files you'll need, update them, and then build the site:  
````
$ npm install
$ grunt init
$ grunt
````

The site should now be hosted on port 4000, so enter the url `localhost:4000` in your browser. Grunt will watch the directory and reload the site whenever there is a change to a file it's watching. To stop it, use `CTRL+C` in the terminal.  

####Editing the Site  
All the website files are either Markdown files or plain HTML.  

Brief overview of file hierarchy:  
 * **assets/** - used to hold all .js, .css, fonts, images, and .less files  
 * **_posts/** - some of the pages are rended using Jekyll's built-in post system. All pages that categorized as news, faqs, tutorials, papers, or troubleshooting are formatted as posts. (Only posts can be formatted with Markdown.)  
 * **index.html** - the home page  
 * **_includes/** - HTML snippets included in files using Liquid-format {{ tags }}  
 * **_layouts/** - layouts for HTML pages  
 * **_site/** - output of Jekyll HTML generation. It's filled out when you run `grunt`  
 * **_config.yml** - basic config info for the site, like the url, link formats, files to include, etc. Part of Jekyll  
 * **_plugins/** - plugins that extend Jekyll's functionality. The only plugin there, `pull_modules.rb` pulls the modules from our repo and turns them into site pages.  
 * **bower.json** - list of dependencies bower handles (Bootstrap, jQuery, Isotope, font-awesome, and Octicons)  
 * **package.json** - list of dependencies installed by npm (Grunt stuff)  
 *  **google...** - a junk google file needed to verify my account so I can use their webmaster tools.  
 * **Gemfile** and **Gemfile.lock** - list of ruby gems the site depends on. Handled by bundler.  
 * **Gruntfile.js** - The file that makes all the magic happen. (It's the config file that grunt uses to run.)  
 * **CNAME** - the url of the site
 * **bower_components/** - all the aforementioned dependencies that bower handles are installed here  

The rest of the files I'm sure you can figure out yourself. They're just sources for pages on the site.  

You can edit any page on the site you want from whatever text editor you want. Some tips:  
1. To change site-wide css, use the less files. Never edit the css files in `assets/css` because they'll get overwritten whenever `grunt update` is run.  
2. When you save files, grunt detects the change and automatically reloads the site on your localhost.  
3. Use bootstrap classes to make the site responsive. If you don't know what they are, look them up online.  

####Committing Changes and Pushing to GitHub
When you're done editing things, commit your changes and push them to the build branch. If you're ready for your changes to be pushed to the master branch (i.e. the branch that the world-facing website is built on), run:
````
$ grunt deploy
````

The first time you ever run it, it could fail if you don't have any git user.name or user.email specified globally. Just go to the `_site` directory and edit the info.  

What `grunt deploy` does is minify all the HTML on the site (i.e. delete comments and unneeded whitespace) and push to the master branch.  

####Structure of the Site
The site is designed to have each part of it as self-contained as possible. Each category in the navigation bar points to one page that displays all of the information pertaining to that category. That way, text is not repeated in different sections, ultimately leading to the problem of conflicting instructions that plagued the prior site.  

The start of each file contains YAML front matter. It's a Jekyll thing. Every page needs a title and a layout. The layouts are all stored in `_layouts`. There are currently four layouts for the site:  
 
1. `default.html`: used for every page unless otherwise specified. The `extra_css` and `extra_js` allow custom CSS and Javascript to be added to each page without the need for a new layout.  
2. `docpost.html`: Used for all posts that appear on the Docs page.  
3. `module.html`: Used for all the module pages.  
4. `paper.html`: Used for all the papers on the site related to RTXI.  

The `_includes` folder has some HTML elements that get repeated on lots of pages, like the footer and navigation bar. You can also store text that gets repeated a lot here. That way, if you change it, you only need to edit one place. Use Liquid tags to include the files here.  

Most of the pages are straight-forward. The following pages are just straight HTML with a Jekyll header:   

1. /  
2. /contact  
3. /conference  
4. /install  
5. /stats  

The following is a description of how 'aggregator' pages are put together. 

#####Modules
The modules page contains one index.html file that has the tables of all the available modules for RTXI. The text in each module is extracted for all the module pages, which are just the README files and screenshots pulled from the GitHub repository.  

If you want to add a new module, make sure a README.md file and a screenshot called [REPOSITORY_NAME].png is in the base of the repository. When you run `grunt`, the `pullModules.rb` script will pull all the information and create the pages. If either file is missing, the script throws and error and ignores the repository. When you pull modules for the first time, you'll need to run `grunt` twice. That's not a Jekyll thing; it's just me being bad at ruby.  

In short, to edit this page, edit the files on GitHub.  

######Papers
This page is Javascript madness. All the papers are contained as markdown-formatted posts in `_posts/papers/`. (Each post in here is manually added. No automation.) The aggregate page then looks through all the papers and creates the display. The search and sort functionality is enabled by the Isotope javascript package that bower handles. Isotope is what does the animations and masonry layouts on the page. All the posts have to have 'papers' specified in the category.  

######Docs
The Docs page aggregates lots of posts. It doesn't use javascript directly but rather a bunch of Liquid hacks that take advantage of Bootstrap classes. 

The first category: Tutorials  
It takes the files in `_posts/docs/tutorials` and lists them in order of when they were posted (i.e., the date in the filename). There's a paginator that will split the list into pages for every 20 (I think) that appear. All posts that are tutorials have to have `category: docs tutorials` specified in the YAML front matter.  

The second: Troubleshooting
Same basically as Troubleshooting. Use `category: docs troubleshoot`. 

The third: FAQs
Same as the first two. Only, DO NOT use the title in the markdown file. Just leave the title in the YAML front matter, and keep it in the form of a question. The FAQ posts aren't supposed to be accessible. Their content is all put on the docs page so that people click on a question and see the answer. The numbering is based on the date the faq post was made. You don't need to touch the numbering. It's done automatically.  


  

#####Tips: 
When editing, disable `pullModules.rb`. (Again, I really am not good at ruby. It's so weird.)  You can do things like rename the file, move it, or something. What I do is edit the file and comment out the line:
````
repos = getRepoList(apiurl)
````
and then replace it with: 
````
repos = []
````

Now, grunt won't try to pull all 50ish modules on GitHub every time you save changes. JUST BE SURE TO UNDO THIS BEFORE DEPLOYING TO GITHUB!!!!!!  If you forget, you'll remove all the module pages on the site.  
