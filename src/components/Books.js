import React, { useEffect, useState } from "react";
import { LimitChars } from "../helpers/LimitChars";
import { Replace } from "../helpers/Replace";
import { BsCaretRightFill, BsCaretLeftFill, BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Loader } from "./Loader";

export const Books = () => {

  const [load, setLoad] = useState(false)
  const [books, setBooks] = useState([]);
  const [range, setRange] = useState(0);
  const [pag, setPag] = useState(1);

  const Collection = async () => {
    const url = `https://www.etnassoft.com/api/v1/get/?category=all&criteria=most_viewed&num_items=99`;
    const resp = await fetch(url);
    const data = await resp.json();
    setBooks(data);
    window.setTimeout(setLoad(true), 6000)
  };

  const handleLeft = () => {
    setPag(pag - 1);
    return range > 0 ? setRange(range - 3) : null;
  };

  const handleRight = () => {
    setPag(pag + 1);
    return setRange(range + 3);
  };

  useEffect(() => {
    Collection();
  });


  return !load
  ? <Loader />
  : (
    <>
      <div className="container">
        <div className="books">
          {books.slice(range, range + 3).map((book, idx) => (
            <div className="bookcard" key={idx}>
              <img className="cover" src={book.cover} alt="" />
              <div className="info">
                <h3 className="title">{LimitChars(book.title, 50)}</h3>
                <p className="author">{book.author}</p>
                <p className="description">
                  {LimitChars(Replace(book.content), 100)}
                </p>
                <p className="pages">páginas: {book.pages}</p>
              </div>
            </div>
          ))}
        </div>
        <div id="buttons">
          <div id="arrows">
            {range > 0 ? (
              <BsCaretLeftFill
                className="BsLeft"
                onClick={() => handleLeft()}
              />
            ) : (
              ""
            )}
            <span className="pag">{pag} / 33</span>
            {range < 96 ? (
              <BsCaretRightFill
                className="BsRight"
                onClick={() => handleRight()}
              />
            ) : (
              ""
            )}
          </div>
          <div id="plus">
            <Link to="/AddBook">
              <button className="plusbtn">
                <BsPlusLg className="BsPlus" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
