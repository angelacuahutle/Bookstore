import React from 'react';
import styles from './bookItem.module.css';

function BookItem() {
  return (
    <div className={styles.bookItem}>
      <p className="itemCategory">Novel</p>
      <h2 className="itemTitle">Exquisite Mariposa: A Novel</h2>
      <p className="itemAuthor">Fiona ALison Duncan</p>
      <ul className={styles.itemActions}>
        <li><button type="button" onClick="">Comments</button></li>
        <li><button type="button" onClick="">Remove</button></li>
        <li><button type="button" onClick="">Edit</button></li>
      </ul>
    </div>
  );
}

export default BookItem;
