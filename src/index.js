import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY218_.jpg"
    alt=""
  />
);
const Title = () => <h1>I Love You to the Moon and Back</h1>;
const Author = () => <h4>Amelia Hepworth and Tim Warnes</h4>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
