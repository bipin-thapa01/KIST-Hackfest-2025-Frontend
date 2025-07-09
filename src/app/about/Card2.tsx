import "../page.css";
import "./about.css";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { GrPersonalComputer } from "react-icons/gr";
import { FaCode } from "react-icons/fa";

export default function Card2() {

  const cross = () =>{
    document.getElementById('popup').style.opacity = '0';
    document.getElementById('competition').style.display = 'none';
  }

  return (
    <>
      <div className="competitions" id="competition" >
        <ImCross className="cross" onClick={cross}/>
        <div className="competitions-head">
          Competitions
        </div>
        <div className="competitions-card1">
          <div className="crosshair">
          <FaLocationCrosshairs className="crosshair-icon"/>
          </div>
          <div className="competitions-detail">
            <div>
              Code War
            </div>
            <div>
              29th July, Monday
            </div>
            <div>
              8:00-10:00
            </div>
          </div>
        </div>
        <div className="competitions-card2">
          <div className="computer">
          <GrPersonalComputer className="computer-icon"/>
          </div>
          <div className="competitions-detail">
            <div>
              Ui/UX Design
            </div>
            <div>
              29th July, Monday
            </div>
            <div>
              11:00-1:00
            </div>
          </div>
        </div>
        <div className="competitions-card3">
          <div className="code">
          <FaCode className="code-icon"/>
          </div>
          <div className="competitions-detail">
            <div>
              Hackathon
            </div>
            <div>
              28th - 30th July, Monday
            </div>
            <div>
              8:00-5:00
            </div>
          </div>
        </div>
        <button className="register-button">Register Now</button>
      </div>
    </>
  );
}