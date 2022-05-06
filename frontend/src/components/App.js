import { HashRouter } from 'react-router-dom';
import './App.scss';
import NavBar from './NavBar'
import Footer from './Footer';
import Main from './Main';
import { Fragment } from 'react';
import ScrollToTop from './utils/ScrollToTop';

function App() {
  return (
    <HashRouter>
      <Fragment>
        <ScrollToTop />
        <NavBar />
        <Main />
        <Footer />
      </Fragment>
    </HashRouter>
  );
}

export default App;
