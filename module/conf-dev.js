const conf = {
  title: 'conf',
  opts: {
    protocol: 'http',
    domain: 'localhost',
    port: '8080',
    hTMLResourcePath: 'components'
  },
  helloWorld: function() { return `HELO: ${this.title}` }
}

export { conf };
