import PropTypes from 'prop-types';
import { namespace as ns } from '../../config';

const Punc = (props) => (
  <span className={ns + '-punctuation'}>{props.children}</span>
);

Punc.propTypes = {
  children: PropTypes.oneOf(['.', '?', '!', '...', ',']),
};

Punc.defaultProps = {
  children: '.',
};

export { Punc as default };
