################################################################################
# Rakefile for automatically filling metadata for new posts.
################################################################################

require 'html-proofer'

desc "print usage information"
task :default do
  puts "options: "
  puts "  rake paper \t\t - create a new paper"
  puts "  rake news \t\t - add new news"
  puts "  rake faq \t\t - create new faq item"
  puts "  rake tutorial \t\t - create new tutorial"
  puts "  rake troubleshoot \t - create troubleshooting entry"
  puts "  rake publish \t\t - publish something in _drafts/"
  puts "  rake test \t\t - check the site html"
end

desc "check html generated in _site/."
task :test do
  opts = { 
    :check_html => true, :disable_external => true, 
    :check_favicon => true, :check_external_hash => false, 
    :allow_hash_href => true, :only_4xx => true 
  }
  HTML::Proofer.new("./_site", opts).run
end

desc "Add a new paper"
task :paper do
  puts "Enter paper title:"
  @name = STDIN.gets.chomp
  unless @name.nil? || @name.empty?

    unless @name[-1,1] == "."
      @name = @name + "."
    end

    @slug = "#{@name}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-').gsub('.', '').gsub(/[^\w-]/, '')
    @post_date = Time.now.strftime("%F")

    unless File.file?("_drafts/#{@slug}.md")
      FileUtils.touch("_drafts/#{@slug}.md")
      open("_drafts/#{@slug}.md", 'w' ) do |file|
        file.puts "---"
        file.puts "title: \"#{@name}\""
        file.puts "layout: paper"
        file.puts "category: papers"
        file.puts "date: "
        file.puts "authors: "
        file.puts " - name: "
        file.puts "reference: "
        file.puts "link: "
        file.puts "---"
      end
    end

    system ("#{ENV['EDITOR']} _drafts/#{@slug}.md")

  end
end

desc "Add a news entry"
task :paper do
  puts "Enter post title:"
  @name = STDIN.gets.chomp
  unless @name.nil? || @name.empty?

    unless @name[-1,1] == "."
      @name = @name + "."
    end

    @slug = "#{@name}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-').gsub('.', '').gsub(/[^\w-]/, '')
    @post_date = Time.now.strftime("%F")

    unless File.file?("_drafts/#{@slug}.md")
      FileUtils.touch("_drafts/#{@slug}.md")
      open("_drafts/#{@slug}.md", 'w' ) do |file|
        file.puts "---"
        file.puts "title: \"#{@name}\""
        file.puts "layout: paper"
        file.puts "category: papers"
        file.puts "date: "
        file.puts "authors: "
        file.puts " - name: "
        file.puts "reference: "
        file.puts "link: "
        file.puts "---"
      end
    end

    system ("#{ENV['EDITOR']} _drafts/#{@slug}.md")

  end
end


desc "publish an existing draft."
task :publish do
  Dir.mkdir("_drafts") unless File.exists?("_drafts")
  unless (Dir.entries('_drafts') - %w{ . .. }).empty?

    Dir.foreach("_drafts") do |fname|
      next if fname == '.' or fname == '..' or fname[0] == '.'

      # only display drafts that are categorized. 
      if File.readlines("_drafts/#{fname}").grep(/categor(y|ies):.blog/).any?
        puts "#{fname} (blog)"
      elsif File.readlines("_drafts/#{fname}").grep(/categor(y|ies):.media/).any?
        puts "#{fname} (media)"
      elsif File.readlines("_drafts/#{fname}").grep(/categor(y|ies):.resource/).any?
        puts "#{fname} (resources)"
      elsif File.readlines("_drafts/#{fname}").grep(/categor(y|ies):.project/).any?
        puts "#{fname} (projects)"
      end

    end

    puts ""
    puts "enter page to publish."

    @post_name = STDIN.gets.chomp
    @post_date = Time.now.strftime("%F")

    unless !File.exists?("_drafts/#{@post_name}") || @post_name.nil? || @post_name.empty?

      if File.readlines("_drafts/#{@post_name}").grep(/categor(y|ies):.resource/).any?
        Dir.mkdir("_resources") unless File.exists?("_resources")
        FileUtils.mv("_drafts/#{@post_name}", "_resources/#{@post_name}")
      elsif File.readlines("_drafts/#{@post_name}").grep(/categor(y|ies):.media/).any?
        Dir.mkdir("_media") unless File.exists?("_media")
        FileUtils.mv("_drafts/#{@post_name}", "_media/#{@post_name}")
      elsif File.readlines("_drafts/#{@post_name}").grep(/categor(y|ies):.project/).any?
        Dir.mkdir("_projects") unless File.exists?("_projects")
        FileUtils.mv("_drafts/#{@post_name}", "_projects/#{@post_name}")
      elsif File.readlines("_drafts/#{@post_name}").grep(/categor(y|ies):.blog/).any?
        Dir.mkdir("__posts") unless File.exists?("_posts")
        puts "publish as media? (y/N)"
        @yes = STDIN.gets.chomp

        if @yes == "Y" || @yes == "y"
          Dir.mkdir("_media") unless File.exists?("_media")

          # automatically fill the published_date field.
          text = File.read("_drafts/#{@post_name}")
          text = text.gsub(/published_date:\ /, "published_date: \"#{@post_date}\"")
          File.open("_drafts/#{@post_name}", "w") {|file| file.puts text}

          FileUtils.mv("_drafts/#{@post_name}", "_posts/#{@post_date}-#{@post_name}")
#          FileUtils.symlink("../_posts/#{@post_date}-#{@post_name}", "_media/#{@post_name}")
        else 
          # automatically fill the published_date field.
          text = File.read("_drafts/#{@post_name}")
          text = text.gsub(/published_date:\ /, "published_date: \"#{@post_date}\"")
          File.open("_drafts/#{@post_name}", "w") {|file| file.puts text}

          FileUtils.mv("_drafts/#{@post_name}", "_posts/#{@post_date}-#{@post_name}")
        end
      end

      if File.exists?("_drafts/#{@post_name}")
        puts "error: publishing failed."
      else
        puts "done!"
      end

    end

  else 
    puts "no pages to publish."
  end

end
