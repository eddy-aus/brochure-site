import org from '../organisation';
import toPageConfig from './to-page-config';

const pages = [
  toPageConfig(
    'contact',
    `Get in touch to see how ${org}'s proprietary technology and data platform can help deliver high quality and meaningful online programmes at scale.`,
  ),
  toPageConfig(
    'home',
    `${org} is a breakthrough Edtech solution, enabling the education sector to deliver online learning to prepare today's learners for tomorrow's opportunities.`,
    {
      path: false,
    },
  ),
];

export { pages as default };
