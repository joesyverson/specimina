const appendix = {
  title: 'appendix',
  components: {
    table: {
      title: 'Table',
      subtitle: 'Table: Displayed as Grid',
      id: 'table-2',
      hTML: 'table.html'
    },
  },
  helloWorld: function() { return `HELO: ${this.title}` }
}

export { appendix };
