Library Management App -----Experiment-8

A small React app that demonstrates a Library Management UI with Search, Add, and Remove book functionality.
This README contains step-by-step instructions and complete code for each file so you can copy & paste directly.
This project is a **React-based Library Management UI** that allows users to:

- 🔍 **Search** books by title or author (real-time filtering)
- ➕ **Add** new books to the list
- ❌ **Remove** books from the list

---

Project Structure
src/
index.js
App.js
App.css
components/
Header.js
LibraryManagement.js
SearchBar.js
AddBookForm.js
BookList.js
BookCard.js

---

## 📍 Step 1: Setting up `App.js`

```jsx
// src/App.js
import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleAddBook = (title, author) => {
    if (title.trim() && author.trim()) {
      setBooks([...books, { id: Date.now(), title, author }]);
    }
  };

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Library Management</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookForm onAddBook={handleAddBook} />
      <BookList books={filteredBooks} onRemoveBook={handleRemoveBook} />
    </div>
  );
}

export default App;
Explanation:

Manages the state for books and search term.

Provides functions to add and remove books.

Dynamically filters books based on the search input.
----------------------------------------------------------------------------------------------------------------------------------------------------
📍 Step 2: Creating SearchBar.js
jsx
Copy code
// src/components/SearchBar.js
import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;
Explanation:
A controlled component that updates the searchTerm state as the user types.
----------------------------------------------------------------------------------------------------------------------------------------------------
📍 Step 3: Creating BookForm.js
jsx
Copy code
// src/components/BookForm.js
import React, { useState } from "react";

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook(title, author);
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="New book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="New book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
Explanation:
Handles book addition with controlled inputs for title and author. Clears fields after submitting.
----------------------------------------------------------------------------------------------------------------------------------------------------
📍 Step 4: Creating BookList.js
jsx
Copy code
// src/components/BookList.js
import React from "react";
import BookItem from "./BookItem";

function BookList({ books, onRemoveBook }) {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <BookItem key={book.id} book={book} onRemoveBook={onRemoveBook} />
        ))
      ) : (
        <p>No books found.</p>
      )}
    </div>
  );
}

export default BookList;
Explanation:
Loops through books and renders BookItem for each. Displays a fallback message if no books match.
----------------------------------------------------------------------------------------------------------------------------------------------------
📍 Step 5: Creating BookItem.js
jsx
Copy code
// src/components/BookItem.js
import React from "react";

function BookItem({ book, onRemoveBook }) {
  return (
    <div className="book-item">
      <span>
        <strong>{book.title}</strong> by {book.author}
      </span>
      <button onClick={() => onRemoveBook(book.id)}>Remove</button>
    </div>
  );
}

export default BookItem;
Explanation:
Displays a single book’s title & author with a button to remove it from the list.
----------------------------------------------------------------------------------------------------------------------------------------------------
🎨 Step 6: Styling with App.css
css
Copy code
/* src/App.css */

.app-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #f9f9f9;
}

h1 {
  text-align: center;
}

.search-input,
.book-form input {
  width: calc(100% - 12px);
  padding: 8px;
  margin-bottom: 10px;
  display: block;
}

.book-form {
  display: flex;
  gap: 10px;
}

.book-form input {
  flex: 1;
}

.book-form button {
  padding: 8px 12px;
  cursor: pointer;
}

.book-item {
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.book-item button {
  background: #ff6b6b;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.book-item button:hover {
  background: #ff4c4c;
}
Explanation:
Adds a clean and minimal UI design for the app, with hover effects and responsive layout.

🎯 Learning Outcomes
By completing this project, you will learn:
✅ React State Management – using useState to manage dynamic data.
✅ Props Drilling & Component Communication – passing data/functions between parent & child components.
✅ Controlled Components – managing form inputs with React state.
✅ Dynamic Rendering – filtering and displaying lists based on search queries.
✅ Event Handling – handling onChange, onSubmit, and onClick events.
✅ Separation of Concerns – structuring a React project with reusable components.
✅ Basic Styling with CSS – styling React components using external stylesheets.

```
