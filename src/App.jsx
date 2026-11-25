import "./styles.css";
import startingBooks from "../data/books.json";
import BookList from "./BookList.jsx";
import BookForm from "./BookForm.jsx";
import {useState} from "react";
import FilterBar from "./FilterBar.jsx";

export default function App() {
  const [books, setBooks] = useState(startingBooks);
  const [statusFilter, setStatusFilter] = useState("all");

  function handleToggle(id) {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, read: !book.read } : book
      )
    );
  }
  function handleAdd(newBook) {
    setBooks([...books, { ...newBook, id: Date.now(), category: "Other" }]);
  }

  function handleRemove(id) {
    setBooks(books.filter((book) => book.id !== id));
  }

  const visibleBooks = books.filter((book) => {
    if (statusFilter === "read") return book.read;
    if (statusFilter === "unread") return !book.read;
    return true;
  });

  return (
    <main className="app">
      <h1>Alex's Reading List</h1>
      <BookForm onAdd={handleAdd} />
      <FilterBar status={statusFilter} changeStatus={setStatusFilter} />
      <BookList 
        books={books} 
        isFiltered={statusFilter !== "all"}
        onToggle={handleToggle}
        onRemove={handleRemove}/>
    </main>
  );
}
