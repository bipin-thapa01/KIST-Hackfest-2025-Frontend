"use client";

import { useRouter } from "next/navigation";
import "./page.css";

export default function Home(){
  const router = useRouter();

  const handleClick = () =>{
    router.push('/about');
  }

  return(
    <>
      <div className="hackfest-container">
        <div className="text-hackfest-main">
        KIST Hackfest 2025
        </div>
        <div className="text-hackfest-sub">
          Hack your future.
        </div>
      </div>
      <div className="ready">
        <div className="ready-text">
          Are you ready?
        </div>
        <button onClick={handleClick} className="ready-button">Get Started</button>
      </div>
    </>
  );
}