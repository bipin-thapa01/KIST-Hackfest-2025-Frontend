"use client";

import { useRouter } from "next/navigation";
import "../page.css";
import "./about.css";

export default function page() {
  const router = useRouter();

  const home = () =>{
    router.push('/');
  }

  return (
    <div className="body">
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
        <div className="card1">

        </div>
        <div className="card2">

        </div>
        <div className="card3">

        </div>
        <div className="card4">

        </div>
        <div className="card5">

        </div>
      </div>
    </div>
  );
}