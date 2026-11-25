import "./styles.css";
import startingBooks from "../data/books.json";
import BookList from "./BookList.jsx";

export default function App() {
  return (
    <main className="app">
      <h1>Alex's Reading List</h1>
      <BookList books={startingBooks} />
    </main>
  );
}
