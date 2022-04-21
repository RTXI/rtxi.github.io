# RTXI Website  

**Requirements:** nodejs, npm, ruby, bower, grunt, bundler  
**Limitations:** this is written assuming you're working using some (apt-based)
Linux distro 

## Downloading and Building the Site
If you want to build and edit the site on your own, you'll need to install some
dependencies:  
```term
sudo apt-get install nodejs ruby ruby-dev imagemagick libmagickwand-dev npm curl
```

Ruby is used for all the gems you need to use Jekyll to build the site. You can
use the default version for your OS.

Now, you'll need to install the bundler gem:  
```term
gem install bundler --user-install
```

Bundler is a gem that allows you to install, manage, and update ruby gems for
individual projects. You'll use it to install all the gems used to build the
site (see the Gemfile and Gemfile.lock files in this repository.)

The above command also makes sure that the bundler installs gems in the local
user folder as it can be a pain to use Grunt along with system wide OS gems.

Now, the node packages. The node packages are used for installing `bower` and
`grunt`. What they are will be explained later. Install the node packages 
(bower and grunt-cli):  
```term
npm install bower grunt-cli
```

Bower is a package manager used to install bootstrap and other CSS/JS used to
build the website. It differs from NPM is that it does not manage dependencies
as a variably-nested tree, like npm. What this means is that all the
dependencies will be stored in a simple directory structure that's easy to
customize and update.  

Grunt is a command-line tool that runs commands set in Gruntfile.js. It's the
tool that allows you to build the site, install depencencies, update
CSS/JS/Less, etc. fromt the command line. More detail will come later.  

Now, you need to install the website's dependencies. This is done in the
website directory. Clone the website and switch to the 'build' branch:  
```term
git clone https://github.com/rtxi/rtxi.github.io website
cd website
git checkout build
```
The reason you need to switch to the `build` branch is because GitHub, the host
for this website, does not allow people to run custom plugins on their servers.
(It's a security concern.) The plugin in `_plugins` pulls all the README.md
files from all our repos and turns them into HTML pages found on the [modules
page](http://rtxi.org/modules).  

Basically, we have to run the plugin, generate the site, and then push the
generated site to GitHub. The `build` branch is the branch where all content is
edited, and the `master` branch is where the generated content (in the _site
folder) is pushed to GitHub.

Initialize the site with the files you'll need, update them, and then build the
site:  
```term
npm install
grunt init
grunt
```

`npm install` installs all the node dependencies for the project (grunt,
basically), and once grunt is installed, use it to download all the CSS/JS,
gems etc. used to build the site.   

The site should now be hosted on port 4000, so enter the url `localhost:4000`
in your browser. Grunt will watch the directory and reload the site whenever
there is a change to a file it's watching. The files and directories that grunt
watches are set in `Gruntfile.js`.  

What this means is that you can have a page you're working on open in the
browser (localhost:4000/path/to/page), open the corresponding source file in a
text editor, and whenever you save changes to the file, the page in your
browser will automatically get updated. This behavior is biggest reason to go
through all the trouble of installing grunt. 

To kill grunt, use CTRL+C in the terminal.  

## Editing the Site  
All the website files are either Markdown files or plain HTML.  

Brief overview of file hierarchy:  
 * **assets/** - used to hold all js, css, fonts, images, and less files  
 * **_posts/** - some of the pages are rended using Jekyll's built-in post
   system. All pages are categorized as news, faqs, tutorials, papers, or
   troubleshooting. 
 * **index.html** - the home page  
 * **_includes/** - HTML snippets included in files using Liquid-format tags
 * **_layouts/** - layouts for HTML pages  
 * **_site/** - output of Jekyll HTML generation. It's filled out when you run
   `grunt`  
 * **_config.yml** - basic config info for the site, like the url, link
   formats, files to include, etc. Part of Jekyll  
 * **_plugins/** - plugins that extend Jekyll's functionality. The only plugin
   there, `pullModules.rb` pulls the modules from our repo and turns them into
   site pages.  
 * **bower.json** - list of dependencies bower handles (Bootstrap, jQuery,
   Isotope, and datatables)
 * **package.json** - list of dependencies installed by npm (Grunt stuff)  
 *  **google...** - an empty file needed to verify the google webmaster
    account.  
 * **Gemfile** and **Gemfile.lock** - list of ruby gems the site depends on.
   Handled by bundler.  
 * **Gruntfile.js** - The file that makes all the magic happen. (It's the
   config file that grunt uses to run.)  
 * **CNAME** - the url of the site
 * **bower_components/** - all the aforementioned dependencies that bower
   handles are installed here  

The rest of the files I'm sure you can figure out yourself. They're just
sources for pages on the site.  

You can edit any page on the site you want from whatever text editor you want.
Some tips:  
1. To change site-wide CSS, use the Less files. Less is a CSS preprocessor that
   uses editable variables to populate CSS files. Never edit the css files in
   `assets/css` because they'll get overwritten whenever `grunt update` is run.  
2. When you save files, grunt detects the change and automatically reloads the
   site on your localhost.  
3. Use bootstrap classes to make the site responsive. If you don't know what
   they are, look them up online.  
4. Jekyll and its Liquid syntax provide some handy methods to automate sticking
   in content to pages. The documentation online is pretty good for both. Check
   them out.  


## Making New Pages

To ease the process of filling out all the YAML metadata, I added a Rakefile that 
will create and publish pages to the website. To view the available options, run: 

```term
rake
```

Pages make when running `rake news|troubleshoot|tutorial|faq|paper` will be
found in the `_drafts/` folder. You can manually go to the folder to open files
and edit, or you can use `rake edit` to do that for you. 

When ready to publish pages, run `rake publish` and enter the file name when
prompted. The Rakefile will then move the draft to the appropriate folder. 


## Committing Changes and Pushing to GitHub

When you're done editing things, commit your changes and push them to the
`build` branch. If you're ready for your changes to be pushed to the master
branch (i.e. the branch that the world-facing website is built on), run:  
```term
grunt deploy
```

The first time you ever run it, it could fail if you don't have any git
user.name or user.email specified globally. Just go to the `_site` directory
and run the appropriate `git config` commands to edit the info.  

What `grunt deploy` does is minify all the HTML on the site (i.e. delete
comments and unneeded whitespace) and push to the master branch on GitHub.  

## Structure of the Site
The site is designed to have each part of it as self-contained as possible.
Each category in the navigation bar points to one page that displays all of the
information pertaining to that category. That way, text is not repeated in
different sections, ultimately leading to the problem of conflicting
instructions that plagued the prior site.  

The start of each file contains YAML front matter. It's a Jekyll thing. Every
page needs a title and a layout. The layouts are all stored in `_layouts`.
There are currently four layouts for the site:  
 
1. `default.html`: used for every page unless otherwise specified. The
   `extra_css` and `extra_js` allow custom CSS and Javascript to be added to
   each page without the need for a new layout.  
2. `docpost.html`: Used for all posts that appear on the Docs page.  
3. `module.html`: Used for all the module pages.  
4. `paper.html`: Used for all the papers on the site related to RTXI.  

The `_includes` folder has some HTML elements that get repeated on lots of
pages, like the footer and navigation bar. You can also store text that gets
repeated a lot here. That way, if you change it, you only need to edit one
place. Use Liquid tags to include the files here.  

Most of the pages are straight-forward. The following pages are just straight
HTML with a Jekyll header:   

1. /  
2. /contact  
3. /conference  
4. /install  
5. /stats  

The following is a description of how 'aggregator' pages are put together. 

### Modules
The modules page contains one index.html file that has the tables of all the
available modules for RTXI. The text in each module is extracted for all the
module pages, which are just the README files and screenshots pulled from the
GitHub repository.  

If you want to add a new module, make sure a README.md file and a screenshot
called [REPOSITORY_NAME].png is in the base of the repository. When you run
`grunt`, the `pullModules.rb` script will pull all the information and create
the pages. If either file is missing, the script throws and error and ignores
the repository. When you pull modules for the first time, you'll need to run
`grunt` twice. That's not a Jekyll thing; it's just me being bad at ruby.  

In short, to edit this page, edit the files on GitHub.  

### Papers
This page is Javascript madness. All the papers are contained as
markdown-formatted posts in `_posts/papers/`. (Each post in here is manually
added. No automation.) The aggregate page then looks through all the papers and
creates the display. The search and sort functionality is enabled by the
Isotope javascript package that bower handles. Isotope is what does the
animations and masonry layouts on the page. All the posts have to have 'papers'
specified in the category.  

### Docs
The Docs page aggregates lots of posts. It doesn't use javascript directly but
rather a bunch of Liquid hacks that take advantage of Bootstrap classes. 

The first category: Tutorials    
It takes the files in `_posts/docs/tutorials` and lists them in order of when
they were posted (i.e., the date in the filename). There's a paginator that
will split the list into pages for every 20 (I think) that appear. All posts
that are tutorials have to have `category: docs tutorials` specified in the
YAML front matter.  

The second: Troubleshooting  
Same basically as Troubleshooting. Use `category: docs troubleshoot`.  

The third: FAQs  
Same as the first two. Only, DO NOT use the title in the markdown file. Just
leave the title in the YAML front matter, and keep it in the form of a
question. The FAQ posts aren't supposed to be accessible. Their content is all
put on the docs page so that people click on a question and see the answer. The
numbering is based on the date the faq post was made. You don't need to touch
the numbering. It's done automatically.  
