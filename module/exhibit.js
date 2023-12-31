const exhibit = {
  title: 'exhibit',
  components: {
    table: {
      title: 'Table',
      subtitle: 'Figure & Table',
      id: 'table',
      hTML: 'table.html'
    },
    form: {
      title: 'Form',
      subtitle: 'Form & Fieldset',
      id: 'form',
      hTML: 'form.html'
    },
    img: {
      title: 'Image',
      subtitle: 'Figure, Picture & Image',
      id: 'img',
      hTML: 'p.html'
    },
    p: {
      title: 'Text',
      subtitle: 'Article, Section, Paragraph & Aside',
      id: 'p',
      hTML: 'img.html'
    }
  },
  helloWorld: function() { return `HELO: ${this.title}` }
}

export { exhibit };