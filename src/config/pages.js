const pages = [
  {
    title: 'home',
  },
  {
    filename: '404.html',
    title: '404',
  },
  {
    get dirname() {
      return './' + this.title + '/';
    },
    title: 'home',
  },
  {
    get dirname() {
      return './' + this.title + '/';
    },
    title: 'contact',
  },
];

export { pages as default };
