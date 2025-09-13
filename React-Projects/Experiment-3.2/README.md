Step 1: Setup Project

Open terminal and create a new React app:

npx create-react-app library-management
cd library-management
npm start


Delete extra boilerplate code inside App.js and App.css.

🔹 Step 2: Create LibraryManagement.js

Inside src/components/ folder, create LibraryManagement.js.
For now, just show a title.

import React from "react";

const LibraryManagement = () => {
  return (
    <div>
      <h2>Library Management</h2>
    </div>
  );
};

export default LibraryManagement;

🔹 Step 3: Use it in App.js

Update App.js like this:

import React from "react";
import LibraryManagement from "./components/LibraryManagement";

function App() {
  return <LibraryManagement />;
}

export default App;


👉 Now if you run npm start, you should see Library Management on the screen.

Would you like me to go ahead with Step 4 (adding book list display) next?

You said:
yes
ChatGPT said:

Great 🚀 Let’s move to Step 4: Display book list.

🔹 Step 4: Add Book List (inside LibraryManagement.js)

We’ll show a few books from state using React’s useState.

Update your LibraryManagement.js like this:

import React, { useState } from "react";

const LibraryManagement = () => {
  // initial books
  const [books] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  return (
    <div>
      <h2>Library Management</h2>

      {/* Book List */}
      <div>
        {books.map((book, index) => (
          <div key={index}>
            <strong>{book.title}</strong> by {book.author}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryManagement;


👉 Now run your project. You should see something like:

Library Management
1984 by George Orwell
The Great Gatsby by F. Scott Fitzgerald
To Kill a Mockingbird by Harper Lee


✅ Books are now displayed dynamically.

Do you want me to guide you through Step 5: Adding a search box to filter books?

You said:
yes
ChatGPT said:

Perfect 👍 Let’s move to Step 5: Add a search box to filter books.

🔹 Step 5: Add Search Box (inside LibraryManagement.js)

We’ll use another state variable searchTerm and filter the books dynamically.

Update your LibraryManagement.js:

import React, { useState } from "react";

const LibraryManagement = () => {
  const [books] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  // search term state
  const [searchTerm, setSearchTerm] = useState("");

  // filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Library Management</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Book List */}
      <div>
        {filteredBooks.map((book, index) => (
          <div key={index}>
            <strong>{book.title}</strong> by {book.author}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryManagement;


👉 Now when you type in the input box:

If you type 1984, only that book shows.

If you type Harper, only To Kill a Mockingbird shows.

✅ Search functionality works now.

Would you like me to guide you through Step 6: Adding new books (via input form) next?

You said:
yes
ChatGPT said:

Awesome 🚀 Let’s move to Step 6: Add new books using an input form.

We’ll add two input fields (title, author) and a button to add a new book.

🔹 Step 6 Code (inside LibraryManagement.js)
import React, { useState } from "react";

const LibraryManagement = () => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  // states for new book inputs
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // function to add a new book
  const addBook = () => {
    if (newTitle && newAuthor) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");  // clear input after adding
      setNewAuthor("");
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Library Management</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <br /><br />

      {/* Add book form */}
      <input
        type="text"
        placeholder="Enter book title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter book author"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>

      <br /><br />

      {/* Book List */}
      <div>
        {filteredBooks.map((book, index) => (
          <div key={index}>
            <strong>{book.title}</strong> by {book.author}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryManagement;


👉 Now you can type a book title and author in the two input boxes → click Add Book → it will appear in the list instantly ✅

Do you want me to go ahead with Step 7: Removing a book from the list?

You said:
yes
ChatGPT said:

Perfect John 👍
Let’s move to Step 7: Removing a book from the list.

We’ll add a Remove button beside each book.

🔹 Step 7 Code (inside LibraryManagement.js)
import React, { useState } from "react";

const LibraryManagement = () => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add new book
  const addBook = () => {
    if (newTitle && newAuthor) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove a book
  const removeBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Filtered books
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Library Management</h2>

      {/* Search box */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <br /><br />

      {/* Add book form */}
      <input
        type="text"
        placeholder="Enter book title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter book author"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>

      <br /><br />

      {/* Book List */}
      <div>
        {filteredBooks.map((book, index) => (
          <div key={index} style={{ marginBottom: "8px" }}>
            <strong>{book.title}</strong> by {book.author}
            <button
              onClick={() => removeBook(index)}
              style={{
                marginLeft: "10px",
                background: "red",
                color: "white",
                border: "none",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryManagement;


✅ Now each book has a Remove button → when clicked, that book disappears from the list.

👉 Do you want me to go to Step 8: Split into separate components (BookCard, BookList, LibraryManagement) so it’s more structured?

You said:
yes
ChatGPT said:

Perfect John 🙌
Now we’ll do Step 8: Split the app into separate components for better structure.

We’ll create three components:

BookCard.js → one book with remove button.

BookList.js → shows all books.

LibraryManagement.js → main logic (search, add, remove).

📂 File Structure
src/
 ├── components/
 │     ├── BookCard.js
 │     ├── BookList.js
 │     └── LibraryManagement.js
 ├── App.js

1️⃣ BookCard.js
import React from "react";

const BookCard = ({ title, author, onRemove }) => {
  return (
    <div style={{ marginBottom: "8px" }}>
      <strong>{title}</strong> by {author}
      <button
        onClick={onRemove}
        style={{
          marginLeft: "10px",
          background: "red",
          color: "white",
          border: "none",
          padding: "4px 8px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default BookCard;

2️⃣ BookList.js
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books, onRemove }) => {
  return (
    <div>
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          onRemove={() => onRemove(index)}
        />
      ))}
    </div>
  );
};

export default BookList;

3️⃣ LibraryManagement.js
import React, { useState } from "react";
import BookList from "./BookList";

const LibraryManagement = () => {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add new book
  const addBook = () => {
    if (newTitle && newAuthor) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove book
  const removeBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  // Filter books
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Library Management</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <br /><br />

      {/* Add book */}
      <input
        type="text"
        placeholder="Enter book title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter book author"
        value={newAuthor}
        onChange={(e) => setNewAuthor(e.target.value)}
      />
      <button onClick={addBook}>Add Book</button>

      <br /><br />

      {/* Book List */}
      <BookList books={filteredBooks} onRemove={removeBook} />
    </div>
  );
};

export default LibraryManagement;

4️⃣ App.js
import React from "react";
import LibraryManagement from "./components/LibraryManagement";

function App() {
  return <LibraryManagement />;
}

export default App;


✅ Now your project is modular:

BookCard → one book

BookList → all books

LibraryManagement → logic

👉 Next step (Step 9): Do you want me to help you move all the inline styles into App.css so the code looks cleaner?

You said:
yes
