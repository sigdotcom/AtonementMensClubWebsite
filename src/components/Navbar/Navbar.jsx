import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  //default style

  return (
    // navbar material
    <div className="navbar">
      <div id="atmLogo">
        <Link to="/" id="homeLogoLink">
          <h1 style={{ color: "#3993DD" }}>A</h1>
          <h1 style={{ color: "#EF8354" }}>M</h1>
          <h1 style={{ color: "#C17767" }}>C</h1>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/about"}>About Us</Link>
        </li>
        <li id="dropDownContainer">
          <Link to={"/events"}>Events</Link>

          <ul id="dropDownList">
            <li>
              <Link to={"/menu"}>BBQ</Link>
            </li>
            <li>
              <Link to={"/christmas"}>Christmas</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={"/christmas"}>Christmas</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
