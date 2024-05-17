import { useEffect, useState } from "react";
import booksData from '../data/books.json'

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBooks(booksData.data);
        }, 2500);
    }, []);

    return books;
}