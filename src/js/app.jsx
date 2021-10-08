import 'on-the-case';
// import { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Context from './components/context';
// import Preloader from './components/preloader';
import Nav from './components/nav';
import Contact from './pages/contact';
import Home from './pages/home';
import { BEM } from './utils';
import '../scss/styles.scss';

const { block } = BEM('app');

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [isReady, setIsReady] = useState(true);

  // useEffect(() => {
  //   if (!isLoading) return;

  //   setIsReady(true);

  //   // Mocked response time.
  //   let timer = setTimeout(() => {
  //     setIsReady(false);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [isLoading]);

  return (
    // <Context.Provider
    //   value={{
    //     isReady,
    //     setIsLoading,
    //     setIsReady,
    //   }}
    // >
    //   {isLoading ? (
    //     <Preloader />
    //   ) : (
    <Router>
      <Nav />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Contact} path="/contact" />
      </Switch>
    </Router>
    // )}
    // </Context.Provider>
  );
};

render(<App />, document.querySelector('.' + block()));
