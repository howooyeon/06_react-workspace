import React, { useState } from 'react';
import './App.css';
import data from './data';
import { Link, Route, Routes} from 'react-router-dom';

function App() {
  const [books, setBooks] = useState(data);
  const [inputs, setInputs] = useState({
    id: '',
    Writer: '',
    Title: '',
    releaseDate: ''
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const { id, Writer, Title, releaseDate } = inputs;

  const onAddBook = (e) => {
    e.preventDefault();
    const newBook = {
      id: id,
      Writer: Writer,
      Title: Title,
      releaseDate: releaseDate
    };

    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    setInputs({
      id: '',
      Writer: '',
      Title: '',
      releaseDate: ''
    });
  };

  const onDeleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  return (
    <div className="App">
      <h1>Books</h1>

      <Link to="/list">List</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/regist">Add new Book</Link>

      <Routes>
        <Route
          path="/list"
          element={
            <MainPageTable
            books={books}
            onDeleteBook={onDeleteBook}
            />
          }
        />
          <Route path="/regist" element={
              <AddBookSection
                onAddBook={onAddBook}
                onChange={onChange}
                inputs={inputs}
              />
            }
          />
      </Routes>
    </div>
  );
}

function AddBookSection({onAddBook, onChange, inputs }) {
  return (
    <div>
      <h1>Create Book</h1>
      <form onSubmit={onAddBook}>
        <input name="id" onChange={onChange} value={inputs.id} /><br />
        <input name="Writer" onChange={onChange} value={inputs.Writer} /><br />
        <input name="Title" onChange={onChange} value={inputs.Title} /><br />
        <input name="releaseDate" onChange={onChange} value={inputs.releaseDate} /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

function MainPageTable({ books, onDeleteBook }) {
  return (
    <div>
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Writer</th>
            <th>Title</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <Book key={book.id} book={book} onDeleteBook={onDeleteBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Book({ book, onDeleteBook }) {
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.Writer}</td>
      <td>{book.Title}</td>
      <td>{book.releaseDate}</td>
      <td>
        <button onClick={() => onDeleteBook(book.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default App;
