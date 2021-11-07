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
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);
function Booklist() {
  return <section className="booklist">{newNames}</section>;
}

const Book = ({ author, title, img }) => {
  // const { author, title, img } = props;
  return (
    <article className="book">
      <img src={img} alt="asd" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
