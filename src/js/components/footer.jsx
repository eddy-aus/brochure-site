import PropTypes from 'prop-types';
import { BEM, toRange } from '../utils';

const { block, element } = BEM('footer');

const Footer = (props) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={block()}>
      <p className={element('statement')}>
        © Copyright eddy Australia, {toRange(props.copyrightYear, currentYear)}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  copyrightYear: PropTypes.number.isRequired,
};

export { Footer as default };
