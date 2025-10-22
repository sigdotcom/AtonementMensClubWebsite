import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(){
    return(
        // navbar material 
        <div className="navbar">
            <nav>
                <h1> Atonement Men's Club</h1>
                <ul className="nav-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to={"/menu"}>Menu</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;