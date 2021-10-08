import org from './organisation';

const domains = ['www.', org, '.com', '.au'];
const protocol = 'https://';

const address = {
  get domain() {
    return this.domains.join('');
  },
  domains,
  get nakedDomain() {
    return this.domains.slice(1).join('');
  },
  protocol,
  get URL() {
    return this.protocol + this.domain;
  },
};

export { address as default };
