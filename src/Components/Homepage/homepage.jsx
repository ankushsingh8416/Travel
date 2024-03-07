import React from "react";
import "./homepage.css";
function Homepage() {
  return (
    <>
      <div className="hero" id="hero">
        <div className="hero_content">
          <h1 className="font-black">
            <span className="underline ">Adventure</span> & Experience The
            Travel !
          </h1>
          <div className="hero_btn">
            <a href="#">Contact me</a>
            <a href="#">Know more</a>
          </div>
        </div>
        <div className="hero_img 	">
          <img src="../images/hero-banner1.png" className="w-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
