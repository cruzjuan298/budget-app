import React from "react"
import { Link } from "react-router-dom"
import FrugallyLogo from "./images/frugally-logo.png"

export default function Navbar(){
    return(
        <div className="div-nav">
        <ul className="navbar">
            <li id="navbar1"><img w alt="logo" src={FrugallyLogo}/></li>
            <li id="navbar2">
               <Link to="">Home</Link>
            </li>
            <li id="navbar2">
                <Link to="/budget-meter">Budget Meter</Link>
            </li>
            <li id="navbar2">
                <Link to="/budget-meter">Personalized Budget</Link>
            </li>
        </ul>
    </div>
    )
}