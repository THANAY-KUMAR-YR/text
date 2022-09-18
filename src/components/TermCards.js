import React from "react";
import "./TermCards.css";
import { Link, Outlet } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function TermCards() {
  return (
    <div className="cards--cont">
      <Link  className="termcards" to={"/cardsection"}>
        <div className="terms--div">Long Term</div>
      </Link>
      <Link className="termcards" to={"/cardsection"}>
        <div className="terms--div">Mid Term</div>
      </Link>
      <Link className="termcards" to={"/cardsection"}>
        <div className="terms--div">Short Term</div>
      </Link>
      <Link  className="termcards" to={"/cardsection"}>
        <div className="terms--div">Livestock</div>
      </Link>
    <Outlet/> 
    </div>
  );
}
