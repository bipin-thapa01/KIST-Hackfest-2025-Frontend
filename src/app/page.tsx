"use client";

import "./page.css";
import Home from "./Home";
import { useRouter } from "next/navigation";

export default function Page(){
  const router = useRouter();

  const home = () =>{
    router.push('/');
  }

  return (
    <div className="body">
      <img src="logo.jpg" alt="logo" className="logo" onClick={home}/>
      <Home />
    </div>
  );
}