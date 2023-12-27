import "./NavbarStyle.css"
import logo from "../assets/demazeLogo.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Navbar() {
    return (
        <nav className="NavbarItems">
            <ul className="Menu">
                <img src={logo} alt="logo" />
                <li>
                    <AnchorLink href="#service">Services</AnchorLink>
                </li>
                <li>
                    <AnchorLink href="#About">About Us</AnchorLink>
                </li>
            </ul>
            <button className="button">Contact Us</button>  
        </nav>
    )
}

export default Navbar