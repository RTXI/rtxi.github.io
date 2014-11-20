require 'rubygems'
require 'open-uri'
require 'json'
require 'fileutils'
#require 'github-markup'
#require 'github/markup'
require 'github/markdown'

###Hard-coded for now, automate in _config.yml later...
apiurl = "https://api.github.com/orgs/rtxi/repos?per_page=100"
rawprefix = ["https://raw.githubusercontent.com/RTXI/", "/master/"]
repoprefix = "https://github.com/rtxi/"
build_dir = "_modules"
# module_built_dir  = "modules/modulename/blah"
outfile = "modules.html"

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
         rawprefix = ["https://raw.githubusercontent.com/RTXI/", "/master/"]
         repoprefix = "https://github.com/rtxi/"
         build_dir = "_modules"

         #repos = getRepoList(apiurl)
         repos = ["neuron", "membrane-test"]
         excludelist = getExcludeList
         repo_urls = makeURLs(repos, rawprefix, repoprefix, excludelist)

         unless File.directory? (build_dir)
            FileUtils.mkdir_p(build_dir)
         end

         repo_data = {}
         repo_urls.each_pair do |repo, index|
            begin
               text = open(index["readme"]) {|text| text.read }
               image = open(index["screenshot"]) {|image| image.read }

               unless File.directory? (build_dir+"/"+repo)
                  FileUtils.mkdir_p(build_dir+"/"+repo)
               end


               filename = build_dir+"/"+repo+"/index.html"
               yamlheader = "---\n" +
                           "title: #{repo}\n" +
                           "layout: module\n" +
                           "---\n\n"

               divstart = "<div class=\"container\">\n<p class=\"lead col-md-8\">\n"
               divstop = "</p></div>"

#               htmltext = yamlheader + divstart + GitHub::Markdown.render(text) + divstop
               htmltext = yamlheader + GitHub::Markdown.render(text)

               File.open(filename, "w") { |file| file.write(htmltext) }
               File.open(build_dir+"/"+repo+"/"+repo+".png", "w") { |file| file.write(image) }

               begin
                  site.pages << ModulePage.new(site, site.source, File.join("modules",repo), "index.html", repo)
               rescue StandardError=>error
                  puts "#{error}"
                  puts "Error from adding to site.pages"
               end

            rescue StandardError=>e
               puts "#{e}"
               puts "Error from something else..."
            end

         end
      end

   end

   class ModulePage < Page
      def initialize(site, base, dir, name, repo)
         @site = site
         @base = base
         @dir = dir
         @name = name

         self.process(@name)
         begin
#            self.read_yaml(File.join(base, '_layouts'), "default.html")
            yaml = File.read(File.join(base,"_config.yml"))
            self.data = YAML.load(yaml)
         rescue StandardError=>e
            puts "#{e}"
            puts "error from read_yaml"
         end
         self.content = File.read(File.join("_"+dir, name))
   
         if self.data.key? "module"
            self.data["module"] << repo
            puts "self.data already has \"moodule\""
         else
            self.data["module"] = repo
         end

         begin
#            self.layouts["default"] = Layout.new(self, File.join(base, "_layouts"), "default.html")
#            layout = Layout.new(self, File.join(base, "_layouts"), "default.html")
#            self.render( Layout.new(File.join(base, "_layouts"), "default.html"), "fucky" )
#            self.render(self.layouts, site_payload)
         rescue StandardError=>e
            puts "#{e}"
            puts "Error rendering"
         end
        
#         puts self.data
      end
   end

#   class ModuleConverter < Converter
#      safe :false
#      priority :high

#      def matches(ext)
#         ext =~ /^\.(md|markdown)$/i
#      end

#      def output_ext(ext)
#         ".html"
#      end

#      def convert(content)
#         content = ...

#         site = Jekyll::Site.new(@config)
#         mkconverter = site.getConverterImpl(Jekyll::Converters::Markdown)
#         mkconverter.convert(content)
#      end
#   end

end 
