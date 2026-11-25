export default function BookCard({ book, onToggle, onRemove }) {
  const toggleText = book.read ? "Mark as unread" : "Mark as read";

  return (
    <li className="book-card">
      <h3>{book.title}</h3>
      <p className="book-meta">
        {book.creator} · {book.category}
        {book.minutes ? ` · ${book.minutes} min` : ""}
      </p>
      <p className={book.read ? "status status-read" : "status"}>
        {book.read ? "Read" : "Want to read"}
      </p>
      <div className="card-actions">
        <button
          type="button"
          aria-label={`${toggleText} ${book.title}`}
          onClick={() => onToggle(book.id)}
        >
          {toggleText}
        </button>
        <button
          type="button"
          className="danger"
          aria-label={`Remove ${book.title}`}
          onClick={() => onRemove(book.id)}
        >
          Remove
        </button>
      </div>
    </li>
  );
}