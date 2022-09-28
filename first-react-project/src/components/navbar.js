import React from "react"
import logo from './logo.svg'

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
        
        )
}