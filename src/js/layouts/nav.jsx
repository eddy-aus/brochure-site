import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Context from '../components/context';
import { BEM, toPanelStyles } from '../utils';
import { namespace as ns } from '../../config';

const pages = ['home', 'contact'];
const { block, element } = BEM('nav');

const Nav = () => {
  const { isPageMounted } = useContext(Context);
  const history = useHistory();
  const linkRefs = useRef([]);
  const [panelStyles, setPanelStyles] = useState();
  const classNames = isPageMounted ? block() + ' mounted' : block();

  const handleClick = (linkIndex) => {
    const styles = toPanelStyles(linkIndex, linkRefs);

    setPanelStyles(styles);
  };

  useEffect(() => {
    const activeLink = linkRefs.current.findIndex((link) =>
      link.className.includes(ns + '-active'),
    );
    const linkIndex = activeLink !== -1 ? activeLink : 0;
    const styles = toPanelStyles(linkIndex, linkRefs);

    setPanelStyles(styles);
  }, []);

  console.log(history);

  return (
    <nav className={classNames}>
      <div className={element('menu')}>
        {pages.map((page, i) => (
          <div className={element('item')} key={page}>
            <NavLink
              activeClassName={ns + '-active'}
              className={element('link')}
              onClick={() => handleClick(i)}
              innerRef={(linkRef) => (linkRefs.current[i] = linkRef)}
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
