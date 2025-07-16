"use client";

import { useRouter } from "next/navigation";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { useEffect } from "react";
import "../page.css";
import "./about.css";

export default function Page() {
  const router = useRouter();
  
  useEffect(() =>{
    const height = document.documentElement.scrollHeight;
    const blur = document.getElementById('popup');
    if(blur instanceof HTMLElement){
      blur.style.height = `${height}px`;
    }
  },[]);

  const home = () => {
    router.push('/');
  }

  const popup1 = () => {
    const popup = document.getElementById('popup');
    if(popup instanceof HTMLElement){
       popup.style.opacity = '0.9';
       popup.style.pointerEvents = 'auto';
    }
    const event = document.getElementById('event');
    if(event instanceof HTMLElement){
      event.style.display = 'flex';
    }
    const body = document.getElementById('main-container');
    const html = document.documentElement;
    if(body instanceof HTMLElement){
      body.style.overflow = 'hidden';
      body.style.overscrollBehavior = "none";
      body.style.touchAction = "none";

      html.style.overflow = "hidden";
      html.style.overscrollBehavior = "none";
      html.style.touchAction = "none";
    }
  }

  const popup2 = () =>{
    const popup = document.getElementById('popup');
    if(popup instanceof HTMLElement){
       popup.style.opacity = '0.9';
       popup.style.pointerEvents = 'auto';
    }
    const competition = document.getElementById('competition');
    if(competition instanceof HTMLElement){
      competition.style.display = 'flex';
    }
    const body = document.getElementById('main-container');
    const html = document.documentElement;
    if(body instanceof HTMLElement){
      body.style.overflow = 'hidden';
      body.style.overscrollBehavior = "none";
      body.style.touchAction = "none";

      html.style.overflow = "hidden";
      html.style.overscrollBehavior = "none";
      html.style.touchAction = "none";
    }
  }

  const popup3 = () =>{
    const popup = document.getElementById('popup');
    if(popup instanceof HTMLElement){
       popup.style.opacity = '0.9';
       popup.style.pointerEvents = 'auto';
    }
    const body = document.getElementById('main-container');
    const html = document.documentElement;
    if(body instanceof HTMLElement){
      body.style.overflow = 'hidden';
      body.style.overscrollBehavior = "none";
      body.style.touchAction = "none";

      html.style.overflow = "hidden";
      html.style.overscrollBehavior = "none";
      html.style.touchAction = "none";
    }
  }

  return (
    <div className="body" id="main-container">
      <img src="logo.jpg" alt="logo" onClick={home} className="logo" />
      <div className="hackfest-container">
        <div className="text-hackfest-main">
          KIST Hackfest 2025
        </div>
        <div className="text-hackfest-sub">
          Hack your future.
        </div>
      </div>

      <div className="card-container">
        <div className="card1" onClick={popup1}>
          <div className="card1-head">
            About the Event
          </div>
          <div className="card1-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ad similique dicta temporibus necessitatibus aperiam, doloribus quidem debitis numquam praesentium, dolorum assumenda sunt amet aut libero modi error ut aliquid sed quis expedita fugit.
          </div>
        </div>
        <div className="card2" onClick={popup2}>
          <div className="card2-head">
            Competitions
          </div>
          <div className="card2-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ad similique dicta temporibus necessitatibus aperiam, doloribus quidem debitis numquam praesentium, dolorum assumenda sunt amet aut libero modi error ut aliquid sed quis expedita fugit.
          </div>
        </div>
        <div className="card3" onClick={popup3}>
          <div className="card3-head">
            About the Event
          </div>
          <div className="card3-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta ad similique dicta temporibus necessitatibus aperiam, doloribus quidem debitis numquam praesentium, dolorum assumenda sunt amet aut libero modi error ut aliquid sed quis expedita fugit.
          </div>
        </div>
      </div>

      <Card1/>
      <Card2/>

      <div className="blur" id="popup">
      </div>
    </div>
  );
}