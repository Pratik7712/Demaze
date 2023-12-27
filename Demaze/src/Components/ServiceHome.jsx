import ServiceData from "./ServiceData"
import "./ServiceHomeStyle.css"
// import WB from "../assets/website-coding.jpg"
// import aimg from "../assets/application.jpg"
// import game from "../assets/game.jpg"
// import ai from "../assets/artificial-intelligence.jpg"
// import SM from "../assets/social-media.jpg"
// import GD from "../assets/graphic-design.jpg"

function ServiceHome() {
    return (
        <div className="Service" id="service"> 
            <h1>Services</h1>
            <p>We Provide For Your Brand</p>
            <div className="servicecard">
                <ServiceData
                    icon="fa-solid fa-bicycle"   
                    heading="Web Development" 
                    text="We provide end-to-end web app development services designed exclusively to solve your unique business challenges. At Demaze Technologies, we offer custom web apps, portals, e-commerce and SaaS development."               
                />

                <ServiceData
                    icon="fa-solid fa-mobile"
                    heading="App DevelopMent"
                    text="We deliver next-generation iOS, Android and Flutter applications to meet the most demanding customer requirements. Our skilled team design and develop custom feature-packed apps across various business segments."
                />

                <ServiceData
                    icon="fa-solid fa-gamepad"
                    heading="Game Development"
                    text="We focus on expanding your imagination. Our mobile game team offers art and design, user experience design, and cross-platform mobile game development services using Unity and Unreal engines."
                />
            </div>
            <div className="servicecard">
                <ServiceData
                    icon="fa-solid fa-robot"
                    heading="Artificial Intelligence"
                    text="Demaze Technologies offers the best AI development services per the client's requirements. We are experienced in AI development, Natural language processing, computer vision and deep learning to create accurate apps."
                />

                <ServiceData
                    icon="fa-solid fa-bullhorn"
                    heading="Social Media Marketing"
                    text="A successful digital marketing campaign attracts more customers and generates conversions. We have a complete digital marketing service package that promises augmented website traffic and a fruitful customer base."
                />

                <ServiceData
                    icon="fa-solid fa-computer"
                    heading="Graphic Designing"
                    text="At Demaze, We offer graphic design solutions to businesses of all types like brochures, branding banners, social media posts, creative portfolios, logos and brand identity designs."
                />
            </div>
        </div>
    )
}

export default ServiceHome
