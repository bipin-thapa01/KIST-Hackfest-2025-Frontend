import "../page.css";
import "./about.css";

import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiTeamFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";

export default function Card1() {

  const cross = () =>{
    const popup = document.getElementById('popup');
    if(popup instanceof HTMLElement){
       popup.style.opacity = '0';
       popup.style.pointerEvents = 'none';
    }
    const event = document.getElementById('event');
    if(event instanceof HTMLElement){
      event.style.display = 'none';
    }
    const body = document.getElementById('main-container');
    if(body instanceof HTMLElement){
      body.style.overflow = '';
    }
  }

  return (
    <>
      <div className="about-the-event" id="event" >
        <ImCross className="cross" onClick={cross}/>
        <div className="about-the-event-head">
          About the Event
        </div>
        <div className="about-the-event-card1">
          <div className="calendar">
            <FaCalendarAlt className="calendar-icon" />
          </div>
          <div className="event-detail">
            <div>
              Event Date
            </div>
            <div>
              March 28-30, 2025
            </div>
          </div>
        </div>
        <div className="about-the-event-card2">
          <div className="location">
            <FaLocationDot className="location-icon" />
          </div>
          <div className="location-detail">
            <div>
              Location
            </div>
            <div>
              KIST, Kamalpokhari
            </div>
          </div>
        </div>
        <div className="about-the-event-card3">
          <div className="team">
            <RiTeamFill className="team-icon" />
          </div>
          <div className="team-detail">
            <div>
              Organized By
            </div>
            <div>
              KIST College
            </div>
          </div>
        </div>
      </div>
    </>
  );
}