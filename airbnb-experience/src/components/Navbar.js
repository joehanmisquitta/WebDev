import React from "react"
import logo from "../images/airbnblogo.svg"

export default function NavBar(){
    return(
        <nav className="navbar">
            <img src={logo} className="navbarlogo"/>
        </nav>  
    )
}