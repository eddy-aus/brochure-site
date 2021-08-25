import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Context from '../components/context';

const Nav = () => {
  const { isPageMounted } = useContext(Context);
  const classNames = `eddy-nav${isPageMounted ? ' mounted' : ''}`;

  return (
    <nav className={classNames}>
      <span className="eddy-nav__item">
        <NavLink
          activeClassName="eddy-active"
          className="eddy-nav__link"
          exact
          to="/"
        >
          Home
        </NavLink>
      </span>
      <span className="eddy-nav__item">
        <NavLink
          activeClassName="eddy-active"
          className="eddy-nav__link"
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
