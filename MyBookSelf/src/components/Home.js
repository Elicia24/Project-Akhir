import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Search';

const Home = () => {
  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-3xl font-bold mb-4">Selamat datang di E-Library</h1>
      <SearchBar />
      <div className="mt-8">
        <Link to="/books" className="text-blue-500 hover:underline">
          Lihat Semua Buku
        </Link>
      </div>
    </div>
  );
};

export default Home;
