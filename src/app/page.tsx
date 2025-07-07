import "./page.css";
import Home from "./Home";

export default function page(){
  return (
    <div className="body">
      <img src="logo.jpg" alt="logo" className="logo"/>
      <Home />
    </div>
  );
}