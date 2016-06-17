---
---
// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  history: true,

  // More info https://github.com/hakimel/reveal.js#dependencies
  dependencies: [
    { src: '{{site.baseurl}}/reveal.js/plugin/markdown/marked.js' },
    { src: '{{site.baseurl}}/reveal.js/plugin/markdown/markdown.js' },
    { src: '{{site.baseurl}}/reveal.js/plugin/notes/notes.js', async: true },
    { src: '{{site.baseurl}}/reveal.js/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
