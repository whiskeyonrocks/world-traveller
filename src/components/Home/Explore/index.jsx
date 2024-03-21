
import { activityAdventures, activityAttractions, activityDesserts, activityFineDining, activityHike, activitySightSeeing } from "../../../assets";
import "./index.css"

const activities = [
    {
        text: "Hiking",
        image: activityHike,
        alt: "Hiking Image"
    },
    {
        text: "Fine Dining",
        image: activityFineDining,
        alt: "Fine Dining Image"

    },
    {
        text: "Attractions",
        image: activityAttractions,
        alt: "Attractions Image"
    },
    {
        text: "Sightseeing",
        image: activitySightSeeing,
        alt: "Sightseeing Image"
    },
    {
        text: "Adventures",
        image: activityAdventures,
        alt: "Adventure activity image"
    },
    {
        text: "Desserts",
        image: activityDesserts,
        alt: "Desserts Image"
    }
]

const Explore = () => {
    return (
        <div style={{ flexDirection: 'column', padding: "20px 210px" }}>
            <div style={{ flexDirection: 'column', padding: "20px 0px", fontSize: '3em'}}>
                EXPLORE TIME!
            </div>
            <div className="photo-grid" >

                {activities.map((activity, index) => <div key={index} className="photo-container">
                    <img className="explore-photo" src={activity.image} alt={activity.alt} />
                    <div className="photo-text">{activity.text}</div>
                </div>)}

            </div>

        </div>
    )
}

export default Explore;