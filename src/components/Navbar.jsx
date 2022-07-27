import React from "react";
import "../Styling/navStyle.css";

export default function Navbar() {
  return (
    <nav>
      <img
        src="https://i.ibb.co/zFGMxdW/book.png"
        alt="img"
        className="nav--logo"
      />
      <h1>My Travel Journal</h1>
    </nav>
  );
}
