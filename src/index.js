import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg",
  },
  {
    id: 2,
    author: "Shannon Olsen",
    title: "Our Class is a Family",
    img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
  },
];

const names = ["john", "peter", "susan"];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ author, title, img }) => {
  const clickHandler = () => {
    alert(title);
  };
  return (
    <article className="book">
      <img src={img} alt="asd" />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        button
      </button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
