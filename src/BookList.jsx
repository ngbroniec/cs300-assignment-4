import BookCard from "./BookCard.jsx";

export default function BookList({ books }) {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </ul>
  );
}