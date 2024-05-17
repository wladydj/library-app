import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__brand'>
            <Link to="/">Biblioteca Online</Link>
        </div>
        <ul className='navbar__menu'>
            <li>
                <Link to='/'>Inicio</Link>
            </li>
            <li>
                <Link to='/rental'>Alquiler</Link>
            </li>
            <li>
                <Link to='/search'>Búsqueda</Link>
            </li>
        </ul>
    </nav>
  );
};

export default Navbar;
