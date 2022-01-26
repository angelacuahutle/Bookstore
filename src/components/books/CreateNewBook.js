import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';
import React, { useState } from 'react';
import { addBook } from '../../redux/Books/Books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const AuthorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const TitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const NewBook = {
      id: nextId(),
      title,
      author,
    };

    // dispatch an action and jump to the newBook object (your action's payload)
    dispatch(addBook(NewBook));
  };

  return (
    <form>
      <h2>ADD A NEW BOOK!</h2>
      <input
        type="text"
        value={author}
        onChange={AuthorHandler}
        placeholder="Author"
      />

      <input
        type="text"
        value={title}
        onChange={TitleHandler}
        placeholder="Title"
      />
      <select>
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
