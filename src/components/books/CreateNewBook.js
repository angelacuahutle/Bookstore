import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import { addBookAsync } from '../../redux/Books/Books';

function NewBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

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
    <form className="mx-20 border-t-2">
      <h2 className="text-2xl font-bold text-gray-500 my-5">ADD NEW BOOK</h2>
      <input
        className="px-3 py-2 mr-10 border border-zinc-200 rounded w-3/5"
        type="text"
        value={title}
        onChange={TitleHandler}
        placeholder="Book Title"
      />
      <select
        value={category}
        onChange={CategoryHandler}
        className="px-3 py-2 mr-10 border border-zinc-200 rounded w-1/5 text-gray-400"
      >
        <option value="Science Fiction">Science Fiction</option>
        <option value="Art">Art</option>
        <option value="Novele">Novele</option>
        <option value="Novele">Anime</option>
      </select>
      <button
        type="submit"
        onClick={submitBookToStore}
        className="bg-sky-500 text-white px-10 py-2 rounded w-auto"
      >
        ADD A BOOK
      </button>
    </form>
  );
}

export default NewBook;
