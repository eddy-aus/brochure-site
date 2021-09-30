import PropTypes from 'prop-types';
import { BEM } from '../utils';

const { block, element } = BEM('avatar');

const Avatar = ({ image }) => (
  <div className={block()}>
    <div
      className={element('image')}
      style={{
        backgroundImage: `url('${image}')`,
      }}
    />
  </div>
);

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
};

export { Avatar as default };
