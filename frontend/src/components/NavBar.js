// @nhomnhomm Complete this
import {Link, useLocation} from 'react-router-dom'
import logo from '../images/stem-club-logo.png'
import './NavBar.scss'

const NavLink = ({path, text}) => {
  const location = useLocation()
    
  // Detect current view for highlighting
  const isCurrentView = ('/' + location.pathname.split('/')[1]) === path
  
  return (
    <Link 
      to={path} 
      className={`
        nav-item nav-link nav-btn text-white ms-2 px-3 rounded-pill
        ${isCurrentView ? "active" : ""}
      `}
    >
      { text }
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className = 'navbar navbar-expand-md navbar-dark bg-primary sticky-top border-bottom'>
      <Link to='/' className = 'navbar-brand ms-4'>
        <img src={logo} width = '40' height = '40' alt ='Logo' ></img>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarToggler" aria-controls="navBarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className='collapse navbar-collapse' id ='navBarToggler'>
        <div className = 'navbar-nav ms-auto'>
          <NavLink path = '/' text = 'Home'/>
          <NavLink path = '/about' text = 'About Us'/>
          <NavLink path = '/events' text = 'Events'/>
          <NavLink path = '/projects' text = 'Projects'/>
          {/* <NavLink path = '/blog' text = 'Blog'/> */}
          <NavLink path = '/podcast' text = 'Podcast'/>
          {/* <NavLink path = '/journal' text = 'Journal'/> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar