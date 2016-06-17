---
layout: slide

---

<section>

### Some of the External Packages We Used

* ANXS.postgresql
* DavidWittman.redis
* geerlingguy.nodejs
* jdauphant.nginx

These are publicly available.

</section>

<section>

### A&D had some of their own:

* common stuff -- things like `build-essential`, `vim`, `emacs24`, etc
* ruby -- setting up `ruby-install`, installing the chosen version

These are not publicly available, but they are dead simple.

</section>

<section>

### Example: common stuff

<pre><code class="yaml">---
- name: update apt sources
  sudo: yes
  apt: update_cache=yes

- name: install essential software via apt
  sudo: true
  apt: name={% raw %}{{ item.package }}{% endraw %}
  with_items:
    - package: build-essential
    - package: ntp
    - package: git
    - package: vim
    - package: emacs24</code></pre>

</section>

<section>

### Example: ruby-install

<pre><code class="yaml">---
- name: update apt sources
  sudo: yes
  apt: update_cache=yes

- name: install dependencies
  sudo: true
  apt: name={% raw %}{{ item.package }}{% endraw %}
  with_items:
    - package: nodejs
    - package: libyaml-dev
    - package: libxml2-dev
    - package: libxslt-dev

- name: create source directory
  sudo: true
  shell: mkdir -p /usr/local/src creates=/usr/local/src

- name: clone ruby-install
  sudo: true
  git: repo=https://github.com/postmodern/ruby-install.git dest=/usr/local/src/ruby-install update=yes

- name: install ruby-install
  sudo: true
  command: make install chdir=/usr/local/src/ruby-install creates=/usr/local/bin/ruby-install

- name: install rubies
  sudo: true
  command: /usr/local/bin/ruby-install ruby {% raw %}{{ ruby_version }}{% endraw %} creates={% raw %}{{ ruby_path }}{% endraw %}

- name: install bundler
  sudo: true
  command: /opt/rubies/ruby-{% raw %}{{ ruby_version }}{% endraw %}/bin/gem install bundler --no-user-install --no-document
</code></pre>

</section>
