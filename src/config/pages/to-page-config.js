import 'on-the-case';
import address from '../address';
import org from '../organisation';

const themeColor = '#1e1e1e';

const toPageConfig = (title, description, options = {}) => {
  let filename = 'index.html';

  if (options.filename) {
    filename = options.filename.trim();
  }

  let image = '/assets/social-img-default.png';

  if (options.image) {
    image = options.image.trim();
  }

  let imageAlt = `A smart device with a range of ${org} hardware positioned on top of it.`;

  if (options.imageAlt) {
    imageAlt = options.imageAlt.trim();
  }

  let path = title.toKebabCase().trim() + '/';

  if (typeof options.path === 'string' && !!options.path.length) {
    path = options.path.trim() + '/' + path;
  } else if (typeof options.path === 'boolean' && !options.path) {
    path = '';
  }

  let robots = 'index, follow';

  if (options.robots) {
    robots = options.robots.trim();
  }

  let URL = address.URL + '/' + path;

  if (filename !== 'index.html') {
    URL += '/' + filename;
  }

  return {
    filename,
    image,
    imageAlt,
    path,
    robots,
    themeColor,
    URL,
    description: description.trim(),
    title: title.toTitleCase().trim() + ' | ' + address.nakedDomain,
  };
};

export { toPageConfig as default };
