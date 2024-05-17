import logo from '../Unir_2021_logo.svg'
import '../styles/Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header>
    <div className="navbar-wrapper">
        <div className="container">
            <nav className="navbar navbar-static-top">
                <div className="container">
                    <figure>
                        <a href="https://www.unir.net/" title="Página de inicio de la UNIR">
                            <img src={logo} alt="UNIR" />
                        </a>
                    </figure>
                    <div className="navbar-header">
                    <Link className="navbar-brand" >Biblioteca Online | Gestión de libros</Link>
                    <Link to='/' className="navbar-brand" >Inicio</Link>
                    <Link to='/rental' className="navbar-brand">Alquilar Libro</Link>
                    <Link to='/search' className="navbar-brand">Búsqueda</Link>
                    <Link to='/booksview' className="navbar-brand">Lista de Libros</Link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </header>
    </>
  );
};

export default Header;