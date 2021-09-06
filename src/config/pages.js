const pages = [
  {
    title: 'welcome',
  },
  {
    filename: '404.html',
    title: 'uh-oh!',
  },
  {
    get dirname() {
      return './' + this.title + '/';
    },
    title: 'contact',
  },
];

export { pages as default };
