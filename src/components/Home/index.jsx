import About from "./About"
import Cover from "./Cover"
import Explore from "./Explore"

const Home = () => {
    return (
        <div style={{flexDirection: 'column'}}>
        <Cover />
        <Explore />
        <About />
        </div>
    )
}

export default Home