import React, { useEffect, useState } from "react";
import { LimitChars } from "../helpers/LimitChars";
import { Replace } from "../helpers/Replace";
import { BsCaretRightFill, BsCaretLeftFill, BsPlusLg } from "react-icons/bs";
import { Link } from 'react-router-dom'

export const Books = () => {
  const [books, setBooks] = useState([]);
  const [range, setRange] =  useState(0)

  const Collection = async () => {
    const url = `https://www.etnassoft.com/api/v1/get/?category=all&criteria=most_viewed&num_items=50`
    const resp = await fetch(url);
    const data = await resp.json();
    setBooks(data);
  };

  const handleLeft = () => {
    return range>0
    ? setRange(range - 3)
    : null
  }

  const handleRight = () => {
    return setRange(range + 3)
  }

  useEffect(() => {
    Collection();
  }, []);

  return (
    <>
      <div className="container">
        <div className="books">
          {books.slice(range,range+3).map((book, idx) => (
            <div className="bookcard" key={idx}>
              <img className="cover" src={book.cover} alt="" />
              <div className="info">
                <h3 className="title">{LimitChars(book.title,50)}</h3>
                <p className="author">{book.author}</p>
                <p className="description">{LimitChars(Replace(book.content),100)}</p>
                <p className="pages">páginas: {book.pages}</p>
              </div>
            </div>
          ))}
        </div>
        <div id="buttons">
            <div id="arrows">
                {range>0?<BsCaretLeftFill className="BsLeft" onClick={() => handleLeft()}/>:""}
                {range<47?<BsCaretRightFill  className="BsRight" onClick={() => handleRight()}/>:""}
            </div>
            <div id="plus">
                <Link to="/AddBook">
                  <button className="plusbtn"><BsPlusLg className="BsPlus"/></button>
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};
