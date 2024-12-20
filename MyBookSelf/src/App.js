import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/Home';
import BookList from './components/BookList';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookList" element={<BookList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

