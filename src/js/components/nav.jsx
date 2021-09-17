import { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Context from '../components/context';
import Logo from '../components/logo';
import { BEM, toPanelStyles, useEventListenter } from '../utils';

const pages = ['home', 'contact'];
const { block, element } = BEM('nav');

const Nav = () => {
  const { isReady, setIsReady } = useContext(Context);
  const history = useHistory();
  const linkRefs = useRef([]);
  const [panelStyles, setPanelStyles] = useState();
  const classNames = block() + (isReady ? ' ready' : '');

  const handleClick = (linkIndex) => {
    if (typeof linkIndex !== 'number') {
      const activeLink = linkRefs.current.findIndex((link) =>
        link.className.includes('active'),
      );

      linkIndex = activeLink !== -1 ? activeLink : 0;
    }

    const styles = toPanelStyles(linkIndex, linkRefs);

    setPanelStyles(styles);
  };

  useEffect(() => {
    handleClick();
  }, [history]);

  useEventListenter('popstate', handleClick);
  useEventListenter('resize', handleClick);

  return (
    <nav className={classNames}>
      <Link to="/home" onClick={() => handleClick(0)}>
        <Logo className={element('logo')} />
      </Link>
      <div className={element('menu')}>
        {pages.map((page, index) => (
          <div className={element('item')} key={page}>
            <NavLink
              className={element('link')}
              onClick={() => handleClick(index)}
              innerRef={(linkRef) => (linkRefs.current[index] = linkRef)}
              to={'/' + page.toKebabCase()}
            >
              {page.toTitleCase()}
            </NavLink>
          </div>
        ))}
        <div className={element('panel')} style={panelStyles} />
      </div>
    </nav>
  );
};

export { Nav as default };
