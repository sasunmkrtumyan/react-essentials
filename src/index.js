import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const books = [
  {
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg",
  },
  {
    author: "Shannon Olsen",
    title: "Our Class is a Family",
    img: "https://m.media-amazon.com/images/I/71aLultW5EL._AC_UY218_.jpg",
  },
];

const names = ["john", "peter", "susan"];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { author, title, img } = props.book;
  return (
    <article className="book">
      <img src={img} alt="asd" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
