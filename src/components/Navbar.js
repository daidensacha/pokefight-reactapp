import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { FaBars, FaTimes, FaHome} from 'react-icons/fa';
import './Navbar.scss'

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    const mediaQuery = window.matchMedia('(max-width: 1024px)')
    if (mediaQuery.matches) {
    navRef.current.classList.toggle('responsive_nav');// could be just "show"
    }
  }
  return (
    <header>
      <h3>Pokefight</h3>
      <nav ref={navRef}>
        <NavLink className='nav-link' to='/' onClick={showNavbar} exact>
          <FaHome className="nav-icon" />Home
        </NavLink>
        {/* <NavLink className='nav-link' to='/articles' onClick={showNavbar}>
          <FaNewspaper className="nav-icon" />Articles
        </NavLink>
        <NavLink className='nav-link' to='/authors' onClick={showNavbar} >
          <FaUserAlt className="nav-icon" />Authors
        </NavLink>
        <NavLink className='nav-link' to='/contact' onClick={showNavbar}>
          <FaAddressCard className="nav-icon" />Contact
        </NavLink> */}
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default Navbar;
