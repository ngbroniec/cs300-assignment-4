import "./styles.css";
import startingBooks from "../data/books.json";
import BookList from "./BookList.jsx";
import BookForm from "./BookForm.jsx";
import {useState} from "react";

export default function App() {
  const [books, setBooks] = useState(startingBooks);

  function handleAdd(newBook) {
    setBooks([...books, { ...newBook, id: Date.now(), category: "Other" }]);
  }
  return (
    <main className="app">
      <h1>Alex's Reading List</h1>
      <BookForm onAdd={handleAdd} />
      <BookList books={books} />
    </main>
  );
}
