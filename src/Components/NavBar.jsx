import React, {useState} from "react"
import "../Assets/Styles/NavBar/NavBar.css"

import logo from "../Assets/images/logo.svg"
import hamburger from "../Assets/images/icon-hamburger.svg"

function NavBar(){

    const [menu, setMenu] = useState(false)
    const clicked = menu ? "menu menu--active" : "menu"

    const handleClick = (e) => { 
        setMenu(!menu)
    }


    return(
        <nav id="nav-bar">
            <img src={logo} alt="Logo" />
            <img onClick={handleClick} className="mobile-icon" src={hamburger} alt="Menu" />
            <div className={clicked}>
                <span className="nav-link">About</span>
                <span className="nav-link">Services</span>
                <span className="nav-link">Projects</span>
                <button className="contact-btn">Contact</button>
            </div>
        </nav>
    )
}

export default NavBar;