// File: src/components/Books/BookCard.js
import React from 'react';

const BookCard = ({ book, onDelete }) => {
  return (
    <div className="book-card">
      <div className="book-cover">
        {/* Show first 2 letters of title */}
        {book.title.substring(0, 2)}
      </div>
      <div className="book-details">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Year:</strong> {book.year}</p>
        <p><strong>Rating:</strong> {book.rating}/5</p>
        <button 
          className="delete-btn"
          onClick={() => onDelete(book.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default BookCard;