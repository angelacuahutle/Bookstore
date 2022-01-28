import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { addBookAsync } from '../../redux/Books/Books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action 1');

  const dispatch = useDispatch();

  const CategoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const NewBook = {
      item_id: uuid(),
      title,
      category,
    };

    // dispatch an action and jump to the newBook object (your action's payload)
    dispatch(addBookAsync(NewBook));
  };

  return (
    <form>
      <h2>ADD A NEW BOOK!</h2>
      <input
        type="text"
        value={title}
        onChange={TitleHandler}
        placeholder="Title"
      />
      <select value={category} onChange={CategoryHandler}>
        <option value="Action 1">Science Fiction</option>
        <option value="Action 2">Novele</option>
        <option value="Action 3">Art</option>
        <option value="Action 4">Tech</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>ADD A BOOK</button>
    </form>
  );
}

export default NewBook;
