---
layout: slide

---

## Modifying the Vagrantfile

The following is added to the `dev` configuration section to make Ansible work locally:
{:.left-align}

<pre><code class="ruby">dev.vm.provision :ansible do |a|
  a.playbook = "provisioning/configure.yml"
  a.inventory_path =
    "provisioning/inventories/development"
  a.verbose = "vvvv"
  a.sudo = true
end</code></pre>
