import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import React, { useState } from 'react';
import { addBookAsync } from '../../redux/Books/Books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

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
      item_id: nextId(),
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
        <option value="a">Option 1</option>
        <option value="a">Option 2</option>
        <option value="a">Option 3</option>
        <option value="a">Option 4</option>
      </select>
      <button type="submit" onClick={submitBookToStore}>ADD A BOOK</button>
    </form>
  );
}

export default NewBook;
