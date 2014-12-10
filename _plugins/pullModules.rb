require 'rubygems'
require 'open-uri'
require 'json'
require 'fileutils'
require 'github/markdown'

module Jekyll

   class ModuleGenerator < Generator

      def getRepoList(apiurl)
         data = JSON.parse(open(apiurl) {|file| file.read })
         repos = []
         for repo in 0...data.count
            repos.push(data[repo]["name"])
         end
         return repos
      end

      def makeURLs(repos, rawprefix, repoprefix, excludelist)
         repo_urls = {}
         repos.each do |repo|
            next if excludelist.include? repo
            repo_urls.store(repo, { "base"=>repoprefix+repo, 
                                    "readme"=>rawprefix.join(repo)+"README.md", 
#                                    "screenshot"=>rawprefix.join(repo)+"images/"+repo+".png" })
                                    "screenshot"=>rawprefix.join(repo)+repo+".png" })
         end
         return repo_urls
      end

      def getExcludeList
         # Not done yet, hard-coded for now.
         excludelist = ["rtxi", "tutorials", "rtxi.github.io", "user-manual", "logos"]
         return excludelist
      end

      def generate(site)
         apiurl = "https://api.github.com/orgs/rtxi/repos?per_page=100"
#         rawprefix = ["https://raw.githubusercontent.com/RTXI/", "/master/images/"]
         rawprefix = ["https://raw.githubusercontent.com/RTXI/", "/master/"]
         repoprefix = "https://github.com/rtxi/"
         build_dir = "modules"

         repos = getRepoList(apiurl)
#         repos = ["neuron", "membrane-test", "signal-generator", "alpha-synapse", "axon-axopatch1D", "g-waveform"]
         excludelist = getExcludeList
         repo_urls = makeURLs(repos, rawprefix, repoprefix, excludelist)

#         unless File.directory? (build_dir)
#            FileUtils.mkdir_p(build_dir)
#         end

         repo_data = {}
         repo_urls.each_pair do |repo, index|
            begin
               text = open(index["readme"]) {|text| text.read }
               image = open(index["screenshot"]) {|image| image.read }

            rescue StandardError=>e
               puts "ERROR getting repo info: #{e}"
               next
            end
               
            unless File.directory? (build_dir+"/"+repo)
               FileUtils.mkdir_p(build_dir+"/"+repo)
            end

            filename = build_dir+"/"+repo+"/index.html"
            forkmebanner = "<style>" +
               "#forkongithub a{" +
                  "background:#222;" +
                  "color:#fff;" +
                  "text-decoration:none;" +
                  "font-family:arial,sans-serif;"+
                  "text-align:center;"+
                  "font-weight:bold;"+
                  "padding:5px 10px;"+
                  "font-size:1rem;"+
                  "line-height:2rem;"+
                  "position:fixed;"+
                  "top:0;"+
                  "right:0;"+
                  "top:70px;"+
                  "right:20px;"+
                  "transition:0.25s;"+
               "} #forkongithub a:hover{"+
                  "background:#c01;"+
                  "color:#fff;"+
               "} @media screen and (min-width:768px) {"+
                  "#forkongithub{"+
                     "position:fixed;"+
                     "display:block;"+
                     "top:0;"+
                     "right:0;"+
                     "width:250px;"+
                     "overflow:hidden;"+
                     "height:200px;"+
                  "} #forkongithub a{"+
                     "width:200px;"+
                     "position:absolute;"+
                     "top:70px;"+
                     "right:20px;"+
                  "}"+
               "}</style>"+
               "<span id=\"forkongithub\">"+
                  "<div class=\"hidden-xs\">"+
                     "<a href=\"https://github.com/rtxi/#{repo}\">Fork #{repo.gsub(/-/,' ').split.map(&:capitalize).join(' ')} <span style=\"padding-left:5px\" class=\"octicon octicon-mark-github\"></span></a>"+
                  "</div>"+
                  "<div class=\"visible-xs\">"+
                     "<a href=\"https://github.com/rtxi/#{repo}\"><span class=\"octicon octicon-mark-github\"></span></a>"+
                  "</div>"+
               "</span>"
            yamlheader = "---\n" +
                        "title: #{repo}\n" +
                        "layout: module\n" +
                        "cap-title: #{repo.gsub(/-/,' ').split.map(&:capitalize).join(' ')}\n" +
                        "---\n\n"

            htmltext = yamlheader + forkmebanner + GitHub::Markdown.render(text)

#            File.open(filename, "w") { |file| file.write(htmltext) }
#            File.open(build_dir+"/"+repo+"/"+repo+".png", "w") { |file| file.write(image) }
#            File.open("images/"+repo+".png", "w") { |file| file.write(image) }

            begin
               site.pages << ModulePage.new(site, site.source, File.join("modules",repo), "index.html", htmltext)
            rescue StandardError=>error
               puts "ERROR adding to site.page: #{error}"
            end

         end
      end

   end

   class ModulePage < Page
      def initialize(site, base, dir, name, filecontent)
         @site = site
         @base = base
         @dir = dir
         @name = name

         self.process(@name)
         begin
#            self.read_yaml("_"+dir, name)
#            self.read_yaml(dir, name)
            self.content = filecontent
            if self.content =~ /\A(---\s*\n.*?\n?)^(---\s*$\n?)/m
               self.content = $POSTMATCH
               self.data = YAML.safe_load($1)
            end
         rescue SyntaxError => e
            puts "YAML Exception reading #{File.join(base, name)}: #{e.message}"
         rescue StandardError=>e
            puts "#{e}"
         rescue Exception => e
            puts "Error reading file #{File.join(base, name)}: #{e.message}"
         end

         self.data ||= {}
      end
   end

end 