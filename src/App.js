import React from "react"
import Navbar from "./Navbar"
import Home from "./HomePage"
import BudgetApp from "./BudgetApp"
import { Route, Link, Routes, BrowserRouter, useNavigate } from "react-router-dom"
import Footer from "./Footer"

export default function App(){

    return(
        <div id="content-wrap">
            <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/budget-meter" element={<BudgetApp/>} />
            </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}