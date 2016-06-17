---
layout: slide

---

## The requirements role

The thor script runs the ansible command:

<pre><code class="bash">ansible-galaxy install -r requirements.yml --force</code></pre>

The `-r requirements.yml` looks for that file in the `roles_path` that was specified in `ansible.cfg`.

This loads up the **external** requirements for the project. E.g.:

<pre><code class="yaml">- src: ANXS.postgresql
  version: "v1.2.1"
  path : external</code></pre>

which uses a pre-existing setup for Postgresql
