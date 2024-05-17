import '../styles/LibraryListCard.css'
import React, { useContext } from 'react';
import Book from '../components/Book';
import { LibraryContext } from '../context/LibraryContext';

const BooksView = () => {

  const { books } = useContext(LibraryContext);

  return (
    <>
    <div className="divider"></div>
    <h2 className='center-text'>Libros Disponibles</h2>
    <div className='book-container'>
        {
          books.length > 0 ? (
            books.map((book, index) => (
              <Book 
              key={index}
              id={book.id}
              cover_image={book.cover_image}
              name={book.name}
              isbn={book.isbn}
              author={book.author}
              year_publication={book.year_publication}
              synopsis={book.synopsis}
              critics={book.critics}
              />
            ))
          ) : (
            <p>Buscando libros en stock...</p>
          )
        }
    </div>
    </>
  );
};

export default BooksView;