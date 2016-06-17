---
layout: slide

---

<section>

## Staging, and Further Deployments

* When we were ready to begin staging, we updated the appropriate inventory file under `provisioning/inventories/staging`

* This is an `ini` file, and contains the IP addresses of the staging host(s)


</section>

<section>

<pre><code class="ini">[webservers]
101.xxx.xxx.xxx

[databases]
101.xxx.xxx.xxx

[staging:children]
webservers
databases</code></pre>

</section>

<section>

* In the `provisioning/bin/` folder are scripts that run the Ansible commands to **bootstrap**, **configure**, and **deploy** the application to the appropriate environment, which makes it really simple:

<pre><code class="bash">provisioning/bin/deploy staging</code></pre>

</section>

<section>

Which contains:

<pre><code class="bash">if [ -z "$1" ]; then
    echo "Please specify an inventory/environment"
    exit 1
fi
inventory=$1

ansible-playbook \
  --inventory-file=provisioning/inventories/$inventory \
  --user deploy --ask-vault-pass \
  --extra-vars '{"app_name":"xxx"}' -vvvv \
  provisioning/deploy.yml
</code></pre>

</section>
