import React from "react"

export default function HomePage(){
    return(
         <div className="home">
            <h1 id="home-h1">Do you know how much money you spent today? This Week? This Month?</h1>
            <h2 id="home-h2">Don't worry, your not alone. </h2>
            <h3 id="home-h3">About 65% of Americans don't know how much they spent last month.</h3>
            <h4 id="home-h4">Here are some helpful resources to help you get on track:
                <ul className="list-home">
                    <li><a href="/budget-meter">Budget Helper</a></li>
                    <li><a href="https://www.unfcu.org/guides/the-50-30-20-rule/#:~:text=The%2050%2D30%2D20%20rule%20recommends%20putting%2050%25%20of,to%20realize%20your%20future%20goals.">50-30-20 Rule</a></li>
                    <li><a href="https://dfi.wa.gov/financial-education/information/budgeting">Budgeting Basics</a></li>
                    <li><a href="">Personalized Budget Feature</a></li>
                </ul>
            </h4>
         </div>
    )
}