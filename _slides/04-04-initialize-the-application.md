---
layout: slide

---

<section>

## Initialize the Rails App

With the VM provisioned and running, and having logged in,
the new Rails app is initialized using the template.

The rails application root directory is sitting in `/vagrant/` on the VM,
as per usual. The provisioning has created a symlink in the `/home/vagrant/`
directory as well, using the name of the app.

</section>

<section>

The `rails new` command is run in the rails application directory:

<pre><code class="bash">rails new . --template=rails_template.rb</code></pre>

</section>
