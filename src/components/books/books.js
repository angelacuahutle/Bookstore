import React from 'react';
import CreateNewBook from './CreateNewBook';
import BookItem from '../bookItem/bookItem';

function Books() {
  return (
    <div>
      <BookItem />
      <BookItem />
      <BookItem />
      <CreateNewBook />
    </div>
  );
}

export default Books;
