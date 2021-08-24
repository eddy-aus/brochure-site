import 'on-the-case';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import Context from './components/context';
import Preloader from './components/preloader';
import { namespace as ns } from '../config';
import '../scss/styles.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPreloaderMounted, setIsPreloaderMounted] = useState(false);
  const [isHeadingMounted, setIsHeadingMounted] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsPreloaderMounted(true);

      // Mocked response time.
      let timer = setTimeout(() => {
        setIsPreloaderMounted(false);

        setTimeout(() => {
          setIsHeadingMounted(true);
        }, 500);
      }, 3500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isLoading]);

  let classNames = isHeadingMounted ? 'eddy-heading mounted' : 'eddy-heading';

  return (
    <Context.Provider
      value={{
        isPreloaderMounted,
        setIsLoading,
      }}
    >
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h1 className={classNames}>
            Welcome to <span style={{ fontStyle: 'italic' }}>Eddy</span>, Shane.
          </h1>
        </>
      )}
    </Context.Provider>
  );
};

render(<App />, document.querySelector(`.${ns}-app`));
