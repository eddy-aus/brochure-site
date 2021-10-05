import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from '../components/logo';
import { BEM, useEventListenter } from '../utils';

const pages = ['home', 'contact'];
const { block, element } = BEM('nav');

const Nav = () => {
  const linkRefs = useRef([]);
  const location = useLocation();
  const [panelStyles, setPanelStyles] = useState();

  const updatePanelStyles = () => {
    const linkIndex = linkRefs.current.findIndex((link) =>
      link.className.includes('active'),
    );

    if (linkIndex === -1) {
      return;
    }

    let left = 4;

    for (let i = 0; i <= linkIndex; i++) {
      if (i === linkIndex) {
        left += linkRefs.current[i].offsetWidth / 2;
      } else {
        left += linkRefs.current[i].offsetWidth;
      }
    }

    setPanelStyles({
      left,
      width: linkRefs.current[linkIndex].offsetWidth,
    });
  };

  useEffect(() => {
    updatePanelStyles();
  }, [location.pathname]);

  const handleClick = () => {
    updatePanelStyles();
  };

  useEventListenter('resize', updatePanelStyles);

  return (
    <>
      <nav className={block()}>
        <Link className={element('logo-outer')} onClick={handleClick} to="/">
          <Logo className={element('logo')} />
        </Link>
        <div className={element('menu')}>
          {pages.map((page, index) => (
            <div className={element('item')} key={page}>
              <NavLink
                className={element('link')}
                exact
                onClick={handleClick}
                innerRef={(linkRef) => (linkRefs.current[index] = linkRef)}
                to={'/' + (page === 'home' ? '' : page)}
              >
                {page.toTitleCase()}
              </NavLink>
            </div>
          ))}
          <div className={element('panel')} style={panelStyles} />
        </div>
      </nav>
    </>
  );
};

export { Nav as default };
