import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './Search';

const booksData = [
  { id: 1, title: 'Langit', author: 'Tereliye', category: '', year: 2021, description: '' },
  { id: 2, title: 'Novel Yunani', author: 'Marianne Andre', category: 'Sejarah', year: 2020, description: '' },
  { id: 3, title: 'Novel Sejarah', author: 'Markus Luthor', category: 'Sejarah', year: 2019, description: 'Sejarah dunia dan peradaban.' },
];

const BookList = () => {
  const [filteredBooks, setFilteredBooks] = useState(booksData);

  const handleSearch = (query) => {
    const result = booksData.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.category.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(result);
  };

  return (
    <div className="container mx-auto mt-6">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredBooks.map(book => (
          <div key={book.id} className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <p className="text-sm text-gray-500">{book.category} | {book.year}</p>
            <p className="mt-2 text-gray-700">{book.description}</p>
            <Link to={`/books/${book.id}`} className="text-blue-600 hover:underline mt-4 block">
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
