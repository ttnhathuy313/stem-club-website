import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './Footer';
import Home from './Home'
import About from './About'
import NavBar from './NavBar'

import Activities from './Activities'
import Blog from './Blog'
import Podcast from './Podcast'


const Main = () => {
  return (

    <div className="container">
      <Routes className='main container'>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/activities' element={ <Activities /> } />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/podcast' element={ <Podcast /> } />
      </Routes>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
