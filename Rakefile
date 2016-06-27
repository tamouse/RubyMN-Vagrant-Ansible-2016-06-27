
desc "serve the site locally"
task :serve do |t|
  sh "bundle exec jekyll serve"
end

desc "build the site"
task :build => ["_config.yml", "_config_publish.yml"] do |t|
  sh "bundle exec jekyll build --config=_config.yml,_config_publish.yml"
end

desc "setup the build site for gh-pages"
task :site do |t|
  remote_name = retrieveGithubOrigin
  FileUtils.mkdir_p("_site")

  Dir.chdir("_site") do |site|
    unless Dir.exist?(".git")
      sh "git init"
      sh "git remote add origin #{remote_name}"
      FileUtils.touch(".keep")
      sh "git checkout --orphan gh-pages"
      sh "git add --all && git commit -m 'initial' && git push -u origin gh-pages"
    end
  end
end

desc "publish the site"
task :publish => [:build, :site] do |t|
  sh "(cd _site && git checkout gh-pages && git add --all && git commit -m #{Time.now.strftime("%FT%T")} && git push -fu origin gh-pages)"
end

file "_config.yml"
file "_config_publish.yml"


def retrieveGithubOrigin
  resp = `git remote -v | grep origin | head -1`

  if resp.empty?
    fail "No able to get remote origin url"
  end

  resp.split(/[ \t]/)[1]
end
