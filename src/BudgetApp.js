import React from "react"
import Intro from "./Intro"
import Expenses from "./Expenses"

export default function BudgetApp(){
    const [userMoney, setUserMoney] = React.useState("")
    const [userMoneyLeft, setUserMoneyLeft] = React.useState("")
    return(
        <div>
            <Intro userMoney={userMoney}  userMoneyLeft={userMoneyLeft} setUserMoney={setUserMoney} setUserMoneyLeft={setUserMoneyLeft}/>
            <Expenses userMoney={userMoney} userMoneyLeft={userMoneyLeft} setUserMoney={setUserMoney} setUserMoneyLeft={setUserMoneyLeft}/>
        </div>
    )
}