// @nhomnhomm Complete this
import {Link} from 'react-router-dom'
import logo from '../images/stem-club-logo.png'
import './NavBar.scss'

const NavLink = ({path, text}) => {
  return (
    <Link to = {path} className='nav-item nav-link nav-btn fw-bold text-white px-3 py-1'>
      { text }
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className = 'navbar navbar-expand-lg navbar-dark bg-primary py-0 px-5 sticky-top'>
      <Link to='/' className = 'navbar-brand ms-4'>
        <img src={logo} width = '40' height = '40' alt ='Logo' ></img>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navBarToggler" aria-controls="navBarToggler" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className='collapse navbar-collapse' id ='navBarToggler'>
        <div className = 'navbar-nav ms-auto'>
          <NavLink path = '/about' text = 'About Us'/>
          <NavLink path = '/activities' text = 'Activities'/>
          <NavLink path = '/blog' text = 'Blog'/>
          <NavLink path = '/podcast' text = 'Podcast'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar