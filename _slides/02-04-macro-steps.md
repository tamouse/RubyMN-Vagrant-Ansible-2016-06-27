---
layout: slide

---

## Creating a new project now consists of 4 automated steps:

1. run thor script
2. in project dir: `vagrant up --provision`
3. in project dir: `vagrant ssh`
4. on the VM, in the `/vagrant/` dir:

    `rails new . -m rails_template.rb`
