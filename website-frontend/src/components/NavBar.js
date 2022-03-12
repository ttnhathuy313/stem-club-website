// @nhomnhomm Complete this

import { Link } from "react-router-dom"

const NavBtn = ({path, text}) => {
  return (
    <Link to={ path }>
      <button>
        { text }
      </button>
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className='d-flex flex-row'>
      <NavBtn path='/' text='Home' />
      <NavBtn path='/about' text='About' />
    </div>
  )
}

export default NavBar