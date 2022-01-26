import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from '../bookItem/bookItem';
import NewBook from './CreateNewBook';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      <NewBook />
    </div>
  );
}

export default Books;
