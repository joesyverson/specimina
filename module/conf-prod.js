const conf = {
  title: 'conf',
  opts: {
    protocol: 'https',
    domain: 'specimina.la-leg.com',
    port: '443',
    hTMLResourcePath: 'components'
  },
  helloWorld: function() { return `HELO: ${this.title}` }
}

export { conf };
