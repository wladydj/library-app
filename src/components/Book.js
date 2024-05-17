import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Book = ({ id, isbn, name, author, year_publication, cover_image, synopsis, critics}) => {
  return (
    <>
    <div className='card'>
        <img className='card_img'
        src={cover_image}
        alt='Foto portada del libro' />
        <div className='card__text'>
          <p className='card__text--name'>Nombre del libro: {name}</p>
          <p className='card__text--name'>ISBN: {isbn}</p>
          <p className='card__text--author'>Autor: {author}</p>
          <p className='card__text--year_publication'>Año de Publicación: {year_publication}</p>
          <p className='card__text--synopsis'>Sinopsis: {synopsis}</p>
          <p className='card__text--critics'>Críticas: "{critics}"</p>
          <Link to={`/books/${id}`}>
            <Button type="primary pill lg" text="Ver detalle del libro" />
          </Link>
        </div>
    </div>
    </>
  );
};

export default Book;