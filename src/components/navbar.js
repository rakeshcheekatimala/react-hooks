import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul>
        <li id="title">
          <Link to="/">Explore React</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
