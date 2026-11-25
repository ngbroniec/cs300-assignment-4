import BookCard from "./BookCard.jsx";

export default function BookList({ books, isFiltered, onToggle, onRemove }) {
  if (books.length === 0) {
    return (
      <p className="empty-state">
        {isFiltered
          ? "None of the available books match this filter"
          : "Your list is empty"}
      </p>
    );
  }

  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}