function cleanText(value, fallback) {
  return typeof value === "string" && value.trim() !== ""
    ? value.trim()
    : fallback;
}

export default function BookCard({ book }) {
  const title = cleanText(book.title, "Untitled Book");
  const creator = cleanText(book.creator, "Unknown Author");
  const category = cleanText(book.category, "");
  const hasMinutes = Number.isFinite(book.minutes);

  return (
    <li className="book-card">
      <h3>{title}</h3>
      <p className="book-meta">
        {creator}
        {category ? ` · ${category}` : ""}
        {hasMinutes ? ` · ${book.minutes} min` : ""}
      </p>
      {book.description ? <p>{book.description}</p> : null}
    </li>
  );
}