import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.scss';
import Footer from './Footer';
import Home from './Home'
import About from './About'
import NavBar from './NavBar'

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
    </Routes>
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
