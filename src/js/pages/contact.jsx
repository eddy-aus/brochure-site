import { useContext } from 'react';
import Context from '../components/context';

const Contact = () => {
  const { isPageMounted } = useContext(Context);
  const classNames = `eddy-heading${isPageMounted ? ' mounted' : ''}`;

  return <h1 className={classNames}>Contact</h1>;
};

export { Contact as default };
