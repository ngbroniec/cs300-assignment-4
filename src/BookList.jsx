import BookCard from "./BookCard.jsx";
import EmptyState from "./EmptyState.jsx";

export default function BookList({ books, isFiltered, onToggle, onRemove }) {
  if (books.length === 0) {
    return <EmptyState isFiltered={isFiltered} />;
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