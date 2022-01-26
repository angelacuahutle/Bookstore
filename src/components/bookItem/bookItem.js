import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/Books/Books';
import styles from './bookItem.module.css';

function BookItem({ book }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div className={styles.bookItem}>
      <h2 className="itemTitle">{book.title}</h2>
      <p className="itemAuthor">{book.author}</p>
      <p className="itemAuthor">Fiona ALison Duncan</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick={removeHandler}>Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
