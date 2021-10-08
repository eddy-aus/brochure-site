import PropTypes from 'prop-types';
import { BEM, isHiRes } from '../utils';

const { block, element } = BEM('avatar');

const Avatar = ({ image }) => (
  <div className={block()}>
    <div
      className={element('image')}
      style={{
        backgroundImage: isHiRes
          ? `url('${image.retina}')`
          : `url('${image.default}')`,
      }}
    />
  </div>
);

Avatar.propTypes = {
  image: PropTypes.shape({
    default: PropTypes.string.isRequired,
    retina: PropTypes.string.isRequired,
  }).isRequired,
};

export { Avatar as default };
