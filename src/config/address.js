const address = {
  domain: 'www.eddy.edu.au',
  protocol: 'https://',
  get URL() {
    return this.protocol + this.domain;
  },
};

export { address as default };
