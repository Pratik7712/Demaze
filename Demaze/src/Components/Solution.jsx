import SolutionData from "./SolutionData"
import "./SolutionStyle.css"
import EC from "../assets/ecommerce.jpg"
import FBI from "../assets/finance.jpg"
import manu from "../assets/manufacture.jpg"
import wh from "../assets/health.jpg"
import ent from "../assets/entertainment.jpg"
import edu from "../assets/education.jpg"
import th from "../assets/travel.jpg"
import smc from "../assets/social-media.jpg"
import re from "../assets/real-estate.jpg"
import food from "../assets/pizza.jpg"
import SMC from "../assets/megaphone.jpg"
import Sport from "../assets/se.jpg"

function Solution() {
    return (
        <div className="solution">
            <h1>Solution</h1>
            <p>We Provide To Transform Industries Digitally</p>
        <div>
            <div className="SolutionCard">
                <SolutionData
                    Image={EC}
                    Text="ECommerce"
                />
                <SolutionData
                    Image={FBI}
                    Text="Finance,Banking"
                />
                <SolutionData
                    Image={manu}
                    Text="Manufacturing"
                />
                <SolutionData
                    Image={wh}
                    Text="Health"
                />
            </div>

            <div className="SolutionCard">
                <SolutionData
                    Image={ent}
                    Text="Entertainment"
                />
                <SolutionData
                    Image={edu}
                    Text="Education"
                />
                <SolutionData
                    Image={th}
                    Text="Travel "
                />
                <SolutionData
                    Image={smc}
                    Text="Social media"
                />
            </div>

            <div className="SolutionCard">
                <SolutionData
                    Image={re}
                    Text="Real-Estate"
                />
                <SolutionData
                    Image={food}
                    Text="Food"
                />
                <SolutionData
                    Image={SMC}
                    Text="Marketing"
                />
                <SolutionData
                    Image={Sport}
                    Text="Sports"
                />
            </div>
        </div>
    </div>
    )
}

export default Solution
