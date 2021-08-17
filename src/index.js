import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { books } from "./books.js";
import Book from "./Book.js";

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
