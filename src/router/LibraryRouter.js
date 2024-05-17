import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home';
import BookDetail from '../views/BookDetail';
import Rental from '../views/Rental';
import Search from '../components/Search';
import BooksView from '../views/BooksView'
import NotFound from '../views/NotFound';
import Header from '../components/Header';

function LibraryRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/booksview' element={<Layout><BooksView /></Layout>} />
            <Route path='/books/:bookId' element={<Layout><BookDetail /></Layout>} />
            <Route path='/rental' element={<Layout><Rental /></Layout>} />
            <Route path='/search' element={<Layout><Search /></Layout>} />
            <Route path='*' element={<Layout><NotFound /></Layout>} />
        </Routes>
    </Router>
  );
};

const Layout = ({children}) => (
  <>
      <Header />
      {children}
  </>
);

export default LibraryRouter;