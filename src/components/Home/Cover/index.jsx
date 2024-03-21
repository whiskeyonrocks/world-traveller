import { coverPhoto1 } from "../../../assets"
import "./index.css"

const Cover = () => {


    return (
        <div style={{ position: 'relative', width: "100%" }}>
        <img className="cover-photo" src={coverPhoto1} alt="Travel Photo Cover" />
        {/* Search Box */}
        <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
        </div>
    </div>
    )
}

export default Cover