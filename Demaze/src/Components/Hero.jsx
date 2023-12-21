import "./HeroStyle.css"
import group from "../assets/Peps.jpg"

function Hero() {
  return (
    <>
    <div className="cName">
        <img src={group} alt="image" />
    </div>
    <div className="hero-text">
        <h2>Your Complete IT Solution Services Provider</h2>
    </div>
    </>
  )
}

export default Hero
