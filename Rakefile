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
  puts "Title?"
  @title = STDIN.gets.chomp

  Dir.mkdir("_drafts") unless File.exists?("_drafts")

  unless @title.nil? || @title.empty?
    @slug = "#{@title}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-').gsub('.', '').gsub(/[^\w-]/, '')

    unless File.file?("_drafts/#{@slug}.md")
      FileUtils.touch("_drafts/#{@slug}.md")
      open("_drafts/#{@slug}.md", 'w' ) do |file|
        file.puts "---"
        file.puts "title: \"#{@title}\""
        file.puts "layout: post"
        file.puts "category: news"
        file.puts "---"
      end
    end

    system ("#{ENV['EDITOR']} _drafts/#{@slug}.md")
  end
end

desc "Create a new troubleshooting page."
task :troubleshoot do
  puts "Title?"
  @title = STDIN.gets.chomp

  Dir.mkdir("_drafts") unless File.exists?("_drafts")

  unless @title.nil? || @title.empty?
    @slug = "#{@title}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-').gsub('.', '').gsub(/[^\w-]/, '')

    unless File.file?("_drafts/#{@slug}.md")
      FileUtils.touch("_drafts/#{@slug}.md")
      open("_drafts/#{@slug}.md", 'w' ) do |file|
        file.puts "---"
        file.puts "title: \"#{@title}\""
        file.puts "layout: post"
        file.puts "categories: docs troubleshoot "
        file.puts "---"
      end
    end

    system ("#{ENV['EDITOR']} _drafts/#{@slug}.md")
  end
end

desc "Create a new turorial."
task :tutorial do
  puts "Title?"
  @title = STDIN.gets.chomp

  Dir.mkdir("_drafts") unless File.exists?("_drafts")

  unless @title.nil? || @title.empty?
    @slug = "#{@title}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-').gsub('.', '').gsub(/[^\w-]/, '')

    unless File.file?("_drafts/#{@slug}.md")
      FileUtils.touch("_drafts/#{@slug}.md")
      open("_drafts/#{@slug}.md", 'w' ) do |file|
        file.puts "---"
        file.puts "title: \"#{@title}\""
        file.puts "layout: post"
        file.puts "categories: docs tutorials"
        file.puts "---"
      end
    end

    system ("#{ENV['EDITOR']} _drafts/#{@slug}.md")
  end
end

desc "Create a new faq entry."
task :faq do
  puts "Title?"
  @title = STDIN.gets.chomp

  Dir.mkdir("_drafts") unless File.exists?("_drafts")

  unless @title.nil? || @title.empty?
    unless @title[-1,1] == "?"
      @title = @title + "?"
    end

    @slug = "#{@title}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-').gsub('.', '').gsub(/[^\w-]/, '')

    unless File.file?("_drafts/#{@slug}.md")
      FileUtils.touch("_drafts/#{@slug}.md")
      open("_drafts/#{@slug}.md", 'w' ) do |file|
        file.puts "---"
        file.puts "title: \"#{@title}\""
        file.puts "layout: default"
        file.puts "categories: docs faqs"
        file.puts "---"
      end
    end

    system ("#{ENV['EDITOR']} _drafts/#{@slug}.md")
  end
end

desc "Add a new paper that referenced RTXI."
task :paper do
  puts "Title?"
  @title = STDIN.gets.chomp

  Dir.mkdir("_drafts") unless File.exists?("_drafts")

  unless @title.nil? || @title.empty?
    @slug = "#{@title}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-').gsub('.', '').gsub(/[^\w-]/, '')

    unless File.file?("_drafts/#{@slug}.md")
      FileUtils.touch("_drafts/#{@slug}.md")
      open("_drafts/#{@slug}.md", 'w' ) do |file|
        file.puts "---"
        file.puts "title: \"#{@title}\""
        file.puts "layout: post"
        file.puts "category: papers"
        file.puts ""
        file.puts "reference: "
        file.puts "authors:"
        file.puts " - name: "
        file.puts " - name: "
        file.puts "link: "
        file.puts "---"
      end
    end

    system ("#{ENV['EDITOR']} _drafts/#{@slug}.md")
  end
end

desc "Edit an existing draft."
task :edit do
  unless (Dir.entries('_drafts') - %w{ . .. }).empty?
    Dir.foreach("_drafts") do |title|
      next if title == '.' or title == '..' or title[0] == '.'
      puts title
    end

    puts ""
    puts "pick a page to edit."
    @title = STDIN.gets.chomp

    unless !File.exists?("_drafts/#{@title}") || @title.nil? || @title.empty?
      system ("#{ENV['EDITOR']} _drafts/#{@title}")
    end
  else
    puts "no pages to edit."
  end
end

desc "Publish an existing draft (can check for some errors)."
task :publish do
  Dir.mkdir("_drafts") unless File.exists?("_drafts")
  unless (Dir.entries('_drafts') - %w{ . .. }).empty?

    Dir.foreach("_drafts") do |title|
      puts "#{title}"
    end

    puts ""
    puts "Publish which draft?"

    @title = STDIN.gets.chomp
    @date = Time.now.strftime("%F")

    unless !File.exists?("_drafts/#{@title}") || @title.nil? || @title.empty?
      if File.readlines("_drafts/#{@title}").grep(/categor(y|ies):.news/).any?
        Dir.mkdir("_posts/news") unless File.exists?("_posts/news")
        FileUtils.mv("_drafts/#{@title}", "_posts/news/#{@date}-#{@title}")
      elsif File.readlines("_drafts/#{@title}").grep(/categor(y|ies):.troubleshoot/).any?
        Dir.mkdir("_posts/docs/troubleshoot") unless File.exists?("_posts/docs/troubleshoot")
        FileUtils.mv("_drafts/#{@title}", "_posts/docs/troubleshoot/#{@date}-#{@title}")
      elsif File.readlines("_drafts/#{@title}").grep(/categor(y|ies):.tutorials/).any?
        Dir.mkdir("_posts/docs/tutorials") unless File.exists?("_posts/docs/tutorials")
        FileUtils.mv("_drafts/#{@title}", "_posts/docs/tutorials/#{@date}-#{@title}")
      elsif File.readlines("_drafts/#{@title}").grep(/categor(y|ies):.faqs/).any?
        Dir.mkdir("_posts/docs/faqs") unless File.exists?("_posts/docs/faqs")
        FileUtils.mv("_drafts/#{@title}", "_posts/docs/faqs/#{@date}-#{@title}")
      elsif File.readlines("_drafts/#{@title}").grep(/categor(y|ies):.papers/).any?
        Dir.mkdir("_posts/papers") unless File.exists?("_posts/papers")
        FileUtils.mv("_drafts/#{@title}", "_posts/papers/#{@date}-#{@title}")
      end
    end
  else 
    puts "There are no pages to publish."
  end
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
