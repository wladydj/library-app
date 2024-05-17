import '../styles/LibraryListCard.css'
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LibraryContext } from '../context/LibraryContext';

const LibraryListCard = () => {

  const { bookId } = useParams();
  
  const { books } = useContext(LibraryContext);

  const book = books.find(b => b.id === bookId);
  

  if (!book) {
    return <h2>Libro no encontrado</h2>;
  }

  console.log(book?.name);

  return (
    <>
    <div className="divider"></div>
    <div className='card'>
        <img 
            className='card__img'
            src={book?.cover_image}
            alt='Foto portada' />
        <div className='card__text'>
          <p className='card__text--name'>Nombre del libro: {book?.name}</p>
          <p className='card__text--author'>Autor: {book?.author}</p>
          <p className='card__text--year_publication'>Año de Publicación: {book?.year_publication}</p>
          <p className='card__text--synopsis'>Sinopsis: {book?.synopsis}</p>
          <p className='card__text--critics'>Críticas: "{book?.critics}"</p>
        </div>
    </div>
    </>
  );
};

export default LibraryListCard;