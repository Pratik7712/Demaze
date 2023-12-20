import "./NavbarStyle.css"
import logo from "../assets/demazeLogo.jpg"

function Navbar() {
    return (
        <nav className="NavbarItems">

            <ul className="Menu">
                <img src={logo} alt="logo" />
                <li>Services</li>
                <li>About Us</li>
            </ul>
            <button className="button">Contact Us</button>  
        </nav>
    )
}

export default Navbar