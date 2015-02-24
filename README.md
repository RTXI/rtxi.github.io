###RTXI  

The sources of the new RTXI 2.0 website. [Check it out](https://rtxi.github.io)  

**Requirements:** nodejs, ruby, bower, grunt, bundler  
**Limitations:** none  

####Downloading and Building the Site
If you want to build and edit the site on your own, you'll need to install ruby and nodejs:  
````
$ sudo apt-get install nodejs ruby imagemagick libmagickwand-dev
````

You'll need to install the bundler gem (you may need to be root):  
````
$ gem install bundler
````

And also bower and grunt-cli (again, may need to do as root):  
````
$ npm -g install bower grunt-cli
````


With dependencies installed, clone the website and switch to the 'build' branch:  
````
$ git clone https://github.com/rtxi/rtxi.github.io website
$ cd website
$ git checkout build
````

Initialize the site with the files you'll need, update them, and then build the site:  
````
$ npm install
$ grunt init
$ grunt update
$ grunt
````

The site should now be hosted on port 4000, so enter the url `localhost:4000` in your browser.  


####Editing the Site  
All the website files are either Markdown files or plain HTML. You are free to use whatever templating engine you want, but just know that if you try to push that to our site, I will bite you.  

Brief overview of file hierarchy:  
 * **assets/** - used to hold all .js, .css, fonts, images, and .less files  
 * **_posts/** - some of the pages are rended using jekyll's built-in post system. All pages that categorized as news, faqs, tutorials, papers, or troubleshooting are formatted as posts. (Only posts can be formatted as Markdown.)  
 * **index.html** - the home page  
 * **_includes/** - HTML snippets included in files using Liquid-format {{ tags }}  
 * **_layouts/** - layouts for HTML pages  
 * **_site/** - output of Jekyll HTML generation. It's filled out when you run `grunt`  
 * **_config.yml** - basic config info for the site, like the url, link formats, files to include, etc. Part of Jekyll  
 * **_plugins/** - plugins that extend Jekyll's functionality. The only one there pulls the modules from our repo and turns them into site pages.  
 * **bower.json** - list of dependencies bower handles (Bootstrap, jQuery, Isotope, font-awesome, and Octicons)  
 * **package.json** - list of dependencies installed by npm (Grunt stuff)  
 *  **google...** - a junk google file needed to verify my account so I can use their webmaster tools.  
 * **Gemfile** - list of ruby gems the site depends on. Handled by bundler  
 * **Gruntfile.js** - The file that makes all the magic happen  
 * **CNAME** - the url of the site
 * **bower_components/** - all the aforementioned dependencies that bower handles are installed here  

The rest of the files I'm sure you can figure out yourself. They're just sources for pages on the site.  

You can edit any page on the site you want from whatever text editor you want. Some tips:  
1. To change site-wide css, use the less files. Never edit the css files in `assets/css` because they'll get overwritten whenever `grunt update` or `grunt init` is run.  
2. When you save files, grunt detects the change and automatically reloads the site on your localhost.  
3. Use bootstrap classes to make the site responsive. If you don't know what they are, look them up.  

####Committing Changes and Pushing to GitHub
When you're done editing things, commit your changes and push them to the build branch. If you're ready for your changes to be pushed to the master branch (i.e. the branch that the world-facing website is built on), run:
````
$ grunt deploy
````

The first time you ever run it, it could fail if you don't have any git user.name or user.email specified. Just go to the `_site` directory and edit the info.  

What `grunt deploy` does is minify all the HTML on the site (i.e. delete comments and unneeded whitespace) and push to the master branch.  



####End

Well, there you have it. That's all that I'll write on the site just now.  
