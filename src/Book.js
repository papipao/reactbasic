import React from "react";

const Book = ({ img, title, author }) => {
  const clickHandler = () => {
    alert("hello world");
  };
  const complexExample = (auth) => {
    console.log(auth);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Click it
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        Click it
      </button>
    </article>
  );
};

export default Book;
