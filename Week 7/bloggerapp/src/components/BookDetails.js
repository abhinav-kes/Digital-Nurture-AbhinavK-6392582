import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 1, bname: 'Master React', price: 670 },
    { id: 2, bname: 'Deep Dive into Angular 11', price: 800 },
    { id: 3, bname: 'Mongo Essentials', price: 450 }
  ];

  // Early return conditional rendering
  if (books.length === 0) return <p>No books available.</p>;

  return (
    <div className="section">
      <h2>Book Details</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
