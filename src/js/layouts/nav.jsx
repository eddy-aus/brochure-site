import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../components/context';
import { BEM } from '../utils';
import { namespace as ns } from '../../config';

const { block, element } = BEM('nav');

const Nav = () => {
  const { isPageMounted } = useContext(Context);
  const classNames = `${block()}${isPageMounted ? ' mounted' : ''}`;

  return (
    <nav className={classNames}>
      <span className={element('item')}>
        <NavLink
          activeClassName={ns + '-active'}
          className={element('link')}
          exact
          to="/home"
        >
          Home
        </NavLink>
      </span>
      <span className={element('item')}>
        <NavLink
          activeClassName={ns + '-active'}
          className={element('link')}
          exact
          to="/contact"
        >
          Contact
        </NavLink>
      </span>
    </nav>
  );
};

export { Nav as default };
