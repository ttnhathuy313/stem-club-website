import { Route, Routes } from "react-router-dom"
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Events from './Events'
import Blog from './Blog'
import Podcast from './Podcast'
import SingleProject from "./SingleProject"
import SingleEvent from "./SingleEvent"

const Main = () => {
  return (
    <div className="container-fluid p-0 m-0">
      <Routes className='main container'>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/events' element={ <Events /> } />
        <Route path='/blog' element={ <Blog /> } />
        <Route path='/podcast' element={ <Podcast /> } />
        <Route path='/projects/:slug' element={ <SingleProject /> }/>
        <Route path='/events/:slug' element={ <SingleEvent /> }/>
      </Routes>
    </div>
  )
}

export default Main