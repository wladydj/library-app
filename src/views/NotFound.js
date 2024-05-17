import React from 'react';
import '../styles/NotFound.css';
import NotFounds from '../pngwing.com.png'

function NotFound() {
  return (
    <>
    <div className="divider"></div>
    <div className='container-notfound'>
    <header className='notfound-message'>
    <h1 className='notfound-message__tittle'>404 - Not Found</h1>
    <h2 className='notfound-message__description'>El recurso al que estás intentando acceder no fue encontrado.</h2>
    </header>
    <div className='container-img-notfound'>
      <img src={NotFounds} alt='Not found' className='not-found'/>
    </div>
    </div>
    </>
  );
};

export default NotFound;