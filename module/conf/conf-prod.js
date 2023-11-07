const conf = {
  title: 'conf',
  opts: {
    protocol: 'https',
    domain: 'joesyverson.github.io/specimina/',
    port: '443',
    hTMLResourcePath: 'module/html'
  },
  helloWorld: function() { return `HELO: ${this.title}` }
}

export { conf };
