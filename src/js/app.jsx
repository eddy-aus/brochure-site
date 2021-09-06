import 'on-the-case';
import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Context from './components/context';
import Preloader from './components/preloader';
import Nav from './layouts/nav';
import Contact from './pages/contact';
import Home from './pages/home';
import NotFound from './pages/not-found';
import { BEM } from './utils';
import '../scss/styles.scss';

const { block } = BEM('app');

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPageMounted, setIsPageMounted] = useState(false);
  const [isPreloaderMounted, setIsPreloaderMounted] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setIsPreloaderMounted(true);

      // Mocked response time.
      let timer = setTimeout(() => {
        setIsPreloaderMounted(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      setIsPageMounted(true);
    }
  }, [isLoading]);

  return (
    <Context.Provider
      value={{
        isPageMounted,
        isPreloaderMounted,
        setIsLoading,
      }}
    >
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <Nav />
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route component={Home} path="/home" />
            <Route component={Contact} path="/contact" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      )}
    </Context.Provider>
  );
};

render(<App />, document.querySelector('.' + block()));
