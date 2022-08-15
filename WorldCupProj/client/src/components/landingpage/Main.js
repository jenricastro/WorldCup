import React from "react";
import "./landingpage.css"




const Homepage = ({updateUser}) => {
    return (
        <div>
        <div className="landingpage">
            <h1>World Cup Tracker </h1>
        <a href="https://www.fifa.com/fifaplus/en/articles/qatar-2022-all-qualified-teams-groups-dates-match-schedule-tickets-more">FIFA NEWS</a>
        </div>
        <div>
        
        <a href="https://www.google.com/search?lei=LK36YrvIHtjIwbkP5vqBuAg&q=fifa%20world%20cup%202022%20fixtures&ved=2ahUKEwi7jrGn2Mn5AhVYZDABHWZ9AIcQsKwBKAB6BAhbEAE&biw=1920&bih=929&dpr=1#sie=lg;/m/0fp_8fm;2;/m/030q7;mt;fp;1;;;">
            <img src="images/fullview.jpg" className="image" alt=""/>
        </a>
        </div>
        </div>
    )
}

export default Homepage;
