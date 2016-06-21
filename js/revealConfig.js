// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: '/RubyMN-Vagrant-Ansible-2016-06-27/reveal.js/plugin/markdown/marked.js' },
    { src: '/RubyMN-Vagrant-Ansible-2016-06-27/reveal.js/plugin/markdown/markdown.js' },
    { src: '/RubyMN-Vagrant-Ansible-2016-06-27/reveal.js/plugin/notes/notes.js', async: true },
    { src: '/RubyMN-Vagrant-Ansible-2016-06-27/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
