import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookAsync } from '../../redux/Books/Books';
import styles from './bookItem.module.css';

function BookItem({ book }) {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBookAsync(book.item_id));
  };

  return (
    <div className={styles.bookItem}>
      <p className="itemCategory">{ book.category }</p>
      <h2 className="itemTitle">{book.title}</h2>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick={removeHandler}>Remove</button></li>
      </ul>
    </div>
  );
}

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
