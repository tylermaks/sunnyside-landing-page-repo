import React from "react"
import "../Assets/Styles/Hero/Hero.css"

import downArrow from "../Assets/images/icon-arrow-down.svg"
import NavBar from "../Components/NavBar";


function Hero(){
    return(
        <section id="hero">
            <NavBar />
            <div className="hero-text">
                <h1 className="hero-heading">We are creatives</h1>
                <img className="down-arrow" src={downArrow} alt="Down Arrow" />
            </div>
        </section>
    )
}

export default Hero;