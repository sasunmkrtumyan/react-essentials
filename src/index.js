import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}
const author = "Amelia Hepworth";
const Book = () => {
  const title = "I Love You to the Moon and Back";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg"
        alt="asd"
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p></p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
