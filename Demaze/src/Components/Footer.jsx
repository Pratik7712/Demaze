import "./FooterStyle.css"
import demaze from "../assets/demazelogo.jpg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div>
                    <img src={demaze} alt="logo" />
                </div>
                <div>
                    <a href="https://www.linkedin.com/company/demaze-technologies/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/demaze-technologies/">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/demaze-technologies/">
                        <i className="fa-brands fa-skype"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/demaze-technologies/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://www.instagram.com/demaze_technologies?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA==">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/demaze-technologies/">
                        <i className="fa-brands fa-pinterest"></i>
                    </a>
                </div>
            </div>
            <div className="list">
                <div className="listitem">
                    <h3>Company</h3>
                    <a href="/">About Us</a>
                    <a href="/">Services</a>
                    <a href="/">Projects</a>
                    <a href="/">Contact Us</a>
                </div>

                <div className="listitem">
                    <h3>Services</h3>
                    <a href="/">Mobile App Development</a>
                    <a href="/">Website Development</a>
                    <a href="/">Game Development</a>
                </div>
                <div className="listitem">
                    <h3>Contact Us</h3>
                    <a href="/">
                        <i className="fa-solid fa-location-dot"></i>D-814,Ganesh Glory11,Jagatpur Road,S.G.Highway,Gota,Ahmedabad,Gujarat,382470
                    </a>
                    <a href="/">
                        <i className="fa-solid fa-phone"></i>(+91) 7016660537
                    </a>
                    <a href="/">
                       <i className="fa-regular fa-envelope"></i> info@demaze.in
                    </a>  
                </div>
            </div>
        </div>
    )
}

export default Footer
