import 'on-the-case';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { address, organisation as org } from '../../config';

const SEO = ({ description, image, imageAlt, title }) => {
  const { pathname } = useLocation();

  return (
    <Helmet
      title={title.toTitleCase()}
      titleTemplate={'%s | ' + address.nakedDomain}
    >
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={address.URL + image} property="og:image" />
      <meta
        content={title.toTitleCase() + ' | ' + address.nakedDomain}
        property="og:title"
      />
      <meta content={address.URL + pathname} property="og:url" />
      <meta content={description} name="twitter:description" />
      <meta content={address.URL + image} name="twitter:image" />
      <meta content={imageAlt} name="twitter:image:alt" />
      <meta content={address.URL + pathname} property="twitter:site" />
      <meta
        content={title.toTitleCase() + ' | ' + address.nakedDomain}
        name="twitter:title"
      />
      <link href={address.URL + pathname} rel="canonical" />
    </Helmet>
  );
};

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
};

SEO.defaultProps = {
  image: '/assets/social-img-default.png',
  imageAlt: `A smart device with a range of ${org} hardware positioned on top of it.`,
};

export { SEO as default };
