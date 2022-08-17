import React from "react"
import "../Assets/Styles/NavBar/NavBar.css"

import logo from "../Assets/images/logo.svg"
import hamburger from "../Assets/images/icon-hamburger.svg"

function NavBar(){
    return(
        <nav id="nav-bar">
            <img src={logo} alt="Logo" />
            <img className="hamburger-menu" src={hamburger} alt="Menu" />
        </nav>
    )
}

export default NavBar;