import { aboutUs } from "../../../assets"
import './index.css'

const About = () => {
    return (
        <div style={{ padding: 40, width: "100%" }}>
            <div style={{ flexDirection: 'column' }}>  <div style={{ flex: '1', margin: "20px 50px", fontSize: '3em' }}>
                ABOUT US
            </div>
                <div style={{ margin: "20px 50px", fontSize: '1.4em' }}>
                    World Traveller is built and maintained by a passionate team of tech enthusiasts. we're committed to simplifying the travel planning process and making it as enjoyable as the journey itself. Whether you're a seasoned traveler or embarking on your very first adventure, our mission is to make trip planning easy, enjoyable, and stress-free.
                </div>
            </div>

            <div style={{ flex: '1' }}>
                <img className="about-image" src={aboutUs} alt="Image of people planning trips" />
            </div>
        </div>
    )
}

export default About