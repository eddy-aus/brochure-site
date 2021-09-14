import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Context from '../components/context';
import { BEM, toPanelStyles, useEventListenter } from '../utils';

const pages = ['home', 'contact'];
const { block, element } = BEM('nav');

const Nav = () => {
  const { isReady, setIsReady } = useContext(Context);
  const history = useHistory();
  const linkRefs = useRef([]);
  const [panelStyles, setPanelStyles] = useState();
  const classNames = block() + (isReady ? ' ready' : '');

  const foo = () => {
    const activeLink = linkRefs.current.findIndex((link) =>
      link.className.includes('active'),
    );
    const linkIndex = activeLink !== -1 ? activeLink : 0;
    const styles = toPanelStyles(linkIndex, linkRefs);

    setPanelStyles(styles);
  };

  const handleClick = (linkIndex) => {
    const styles = toPanelStyles(linkIndex, linkRefs);

    setPanelStyles(styles);
  };

  useEffect(() => {
    foo();
  }, [history]);

  useEventListenter('popstate', foo);

  return (
    <nav className={classNames}>
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
