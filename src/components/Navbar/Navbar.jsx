import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return(
        // navbar material 
        <div className="navbar">
            <h1> Atonement Men's Club</h1>
            <ul className="nav-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to={"/menu"}>Menu</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/events"}>Events</Link></li>
                <li><Link to={"/christmas"}>Christmas</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;