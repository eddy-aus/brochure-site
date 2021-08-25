import { useContext } from 'react';
import Context from '../components/context';

const Home = () => {
  const { isPageMounted } = useContext(Context);
  const classNames = `eddy-heading${isPageMounted ? ' mounted' : ''}`;

  return <h1 className={classNames}>Home</h1>;
};

export { Home as default };
