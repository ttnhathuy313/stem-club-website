import { Route, Routes } from "react-router-dom"
import Home from './Home'
import About from './About'
import Activities from './Activities'
import Blog from './Blog'
import Podcast from './Podcast'

const Main = () => {
  return (
    <div className="container-fluid p-0 m-0">
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

export default Main