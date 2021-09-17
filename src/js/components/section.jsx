import PropTypes from 'prop-types';
import Punc from './punc';
import { BEM } from '../utils';

const { block, element, modifier } = BEM('section');

const ImageSection = (props) => {
  const { children, heading, headingPunctuation, image } = props;

  return (
    <section
      className={block() + ' ' + modifier('image')}
      style={{ backgroundImage: `url('${image.trim()}')` }}
    >
      <div className={element('inner')}>
        <h2 className={element('heading')}>
          {heading.toTitleCase()}
          <Punc>{headingPunctuation}</Punc>
        </h2>
        <div className={element('blurb')}>{children}</div>
      </div>
    </section>
  );
};

const SolidSection = (props) => {
  const { children, heading, headingPunctuation, image } = props;

  return (
    <section className={block()}>
      <div className={element('inner')}>
        <h2 className={element('heading')}>
          {heading.toTitleCase()}
          <Punc>{headingPunctuation}</Punc>
        </h2>
        <div className={element('blurb')}>{children}</div>
      </div>
      <div
        className={element('image')}
        style={{ backgroundImage: `url('${image.trim()}')` }}
      />
    </section>
  );
};

const Section = (props) => {
  const { type, ...rest } = props;
  const Component = type === 'image' ? ImageSection : SolidSection;

  return <Component {...rest} />;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  heading: PropTypes.string.isRequired,
  headingPunctuation: PropTypes.oneOf(['.', '?', '!', '...', ',']),
  image: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['image', 'solid']),
};

Section.defaultProps = {
  headingPunctuation: '.',
  type: 'solid',
};

export { Section as default };
