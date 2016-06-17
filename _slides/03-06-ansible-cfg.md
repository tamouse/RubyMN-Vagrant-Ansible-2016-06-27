---
layout: slide

---

## Ansible Configuration

<pre><code class="ini">[defaults]
roles_path = ./provisioning/roles

[ssh_connection]
ssh_args = -o ForwardAgent=yes \
  -o ControlMaster=auto \
  -o ControlPersist=60s</code></pre>