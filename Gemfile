source "https://rubygems.org"

gem "jekyll", "~> 4.4.1"
gem "minima", "~> 2.5"
gem "webrick" # Nécessaire pour Ruby 3+

# Plugins Jekyll
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows et JRuby
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# JRuby
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]