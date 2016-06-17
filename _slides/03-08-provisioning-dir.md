---
layout: slide

---

<section>

## What's in the `provisioning/` directory?

<pre><code class="nohighlight">  bin/
  bootstrap.yml
  configure.yml
  deploy.yml
  group_vars/
  inventories/
  roles/
</code></pre>

</section>

<section>

## `bin/` directory

The `bin/` directory contains shell scripts to make working out to the remove environments simple:

* `bootstrap` - set up initial servers environment, sshd, etc
* `configure` - provision the servers
* `deploy` - deploy the application

</section>

<section>

## YAML Playbook files

* `bootstrap.yml` - steps to perform the initial servers environment setup
* `configure.yml` - the main playbook to run, runs the other playbooks for provisioning the servers
* `deploy.yml` - the deployment playbook

</section>


<section>

## Group Variables `group_vars/` directory

* Contains the variable files, in YAML format.

* The files may be plain text, or encrypted (vaults).

* One for each environment.

</section>

<section>

## `inventories/`

* Inventories are the list of hosts/servers.

* One per environment.

</section>

<section>

## `roles/`

* The roles are the packages to be provisioned.

</section>
