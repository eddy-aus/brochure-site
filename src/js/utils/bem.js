import { namespace as ns } from '../../config';

const BEM = (b) => {
  const block = () => `${ns}-${b.trim()}`;

  const element = (e) => `${block()}__${e.trim()}`;

  const modifier = (m, e) => {
    if (!e) {
      return `${block()}--${m.trim()}`;
    }

    return `${e.indexOf(block()) === -1 ? element(e) : e.trim()}--${m.trim()}`;
  };

  return { block, element, modifier };
};

export { BEM as default };
