---
layout: slide

---

## The requirements role

Recall the ansible command the thor script runs:

<pre><code class="command-line">ansible-galaxy install -r requirements.yml --force</code></pre>

The `-r requirements.yml` looks for that file in the `roles_path` that was specified in `ansible.cfg`.

This loads up the **external** requirements for the project. E.g.:

<pre><code class="yaml">- src: ANXS.postgresql
  version: "v1.2.1"
  path : external</code></pre>

Uses a pre-existing setup for Postgresql.
