import React from 'react';
import '../styles/Home.css';
import Book from '../ebook.png'
import Header from '../components/Header';

const Home = () => {
  return (
    <>
    <Header />
    <div className="divider"></div>
    <div className='container-home'>
    <header className='welcome-message'>
    <h1 className='welcome-message__tittle'>Bienvenido a tu Biblioteca Online</h1>
    <h2 className='welcome-message__description'>Con esta aplicación podrás realizar el alquiler de libros, dándote la oportunidad de hacer volar tu imaginación.</h2>
    </header>
    <div className='container-img-book'>
      <img src={Book} alt='book cover' className='book-cover'/>
    </div>
    </div>
    </>
  );
};

export default Home;