import React from 'react';

function AddBook() {
  return (
    <form>
      <h2>ADD A NEW BOOK!</h2>
      <input type="text" />
      <select>
        <option value="a">Option 1</option>
        <option value="a">Option 2</option>
        <option value="a">Option 3</option>
        <option value="a">Option 4</option>
      </select>
      <button type="submit">ADD A BOOK</button>
    </form>
  );
}

export default AddBook;
