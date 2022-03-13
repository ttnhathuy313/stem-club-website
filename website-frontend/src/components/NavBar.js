// @nhomnhomm Complete this
import logo from '../images/logo.png'

const NavLink = ({path, text}) => {
  return <a className = 'nav-link' href = {path} target='_self'>{text}</a>
}

const NavBar = () => {
  return (
    <div className = 'navbar text-primary border-bottom secondary'>
      <a className = 'navbar-brand' href = '/' target ='_self'>
        <img src={logo} width = '50' height = '50' alt ='Logo' className='d-inline-block align-top'></img>
      </a>
      <div className='ms-auto d-flex'>
        <NavLink path = '/' text = 'Home'/>
        <NavLink path = '/about' text = 'About Us'/>
        <NavLink path = '/activities' text = 'Activities'/>
        <NavLink path = '/blog' text = 'Blog'/>
        <NavLink path = '/podcast' text = 'Podcast'/>
      </div>
    </div>
  )
}

export default NavBar