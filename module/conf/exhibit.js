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
    },
    // menu: {
    //   title: 'Menu',
    //   subtitle: null,
    //   id: null,
    //   hTML: 'menu.html'
    // }
  },
  helloWorld: () => { return 'Hello, World!' }
}

export { exhibit };