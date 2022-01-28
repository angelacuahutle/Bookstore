import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Categories from './components/categories/categories';
import Books from './components/books/books';
import Navbar from './components/navbar/navbar';
import { getBooksAsync } from './redux/Books/Books';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksAsync());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
