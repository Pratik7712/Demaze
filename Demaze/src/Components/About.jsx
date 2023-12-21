import "./AboutStyle.css"
import about from "../assets/About.jpg"
import tech from "../assets/tech.jpg"

function About() {
    return (
        <>
            <div className="US" id="About">
                <h3>A Little</h3>
                <p>About Us</p>
            </div>
            <div className="first">
                    <img src={about} alt="image" />
                <div className="us">
                    <h1>Who Are We</h1>
                    <p>We are a group of brilliant & helpful minds and exceptional talents who promote the value of effective communication and process transparency.We are believers in change! A change is driven by technology and innovation. We help individuals, start-ups, businesses, and enterprises adapt and adopt digital transformation. We aim to change peoples lives and improve businesses with our progressive, value-adding, innovative technology solutions.</p>
                </div>
            </div>

            <div className="first">
                    <img src={tech} alt="image" />
                <div className="us">
                    <h1>What We Do Best</h1>
                    <p>We add the value to your ideas execution.We start by listening to the ideas, issues, requirements, challenges and objectives. The process continues with an effort to understand the business, market sector and competitors to develop information which is combined with our technical knowledge, expertise and research in order to provide the best solution at the lowest cost.</p>
                </div>
            </div>

        </>
    )
}

export default About
