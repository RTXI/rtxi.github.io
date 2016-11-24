require 'html-proofer'

desc "Print out all available commands."
task :default do
  puts "Options:"
  puts "  rake news         - create news entry"
  puts "  rake troubleshoot - new troubleshooting page"
  puts "  rake tutorial     - new tutorial"
  puts "  rake faq          - new FAQ entry"
  puts "  rake paper        - new paper that referenced RTXI"
  puts "  rake edit         - edit an existing draft in _drafts"
  puts "  rake publish      - publish an existing draft"
  puts "  rake test         - find broken links in the compiled _site"
end

desc "Create a new news entry."
task :news do
end

desc "Create a new troubleshooting page."
task :troubleshoot do
end

desc "Create a new turorial."
task :tutorial do
end

desc "Create a new faq entry."
task :faq do
end

desc "Add a new paper that referenced RTXI."
task :paper do
end

desc "Edit an existing draft."
task :edit do
end

desc "Publish an existing draft (can check for some errors)."
task :publish do
end

# assumes _site is already built
desc "Search for broken links in _site."
task :test do 
  HTML::Proofer.new("./_site", {
    :file_ignore => [File.dirname("./_site/news")],
#    :file_ignore => ["/.\/_site\/news\/(.*)\/(.*)\/(.*)\/(.*)\/index.html/"],
#    :file_ignore => ["./_site/news/2015/03/27/rtxi-2015-registration-deadline-approaching/index.html"],
    :verbose => true
  }).run
end
