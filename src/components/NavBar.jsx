import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='navbar'>
      <div className='container'>
        <NavLink className='navbar-brand' to='/'>
          <img src='assets/icon.png' alt='img-icon' width={70} />
          <span className='text-light'> Show Finder</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar
