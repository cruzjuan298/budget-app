import React from "react"

export default function Intro(props){
    const totalExpenses = props.userMoney - props.userMoneyLeft;
    const spendingPercentage = (totalExpenses /props.userMoney) * 100;

    const meterStyle = {
        backgroundColor: spendingPercentage > 99 ? "#E26D6D" : spendingPercentage > 70 ? "#d8ac5a" : "#99D982",
    };
    const message = spendingPercentage > 99 ? "At the end..." : spendingPercentage > 70 ? "Almost at the end.." : "Not near the end..."
    function handleUserChange(event){
            const newValue = event.target.value;
            props.setUserMoney(newValue);
            props.setUserMoneyLeft(newValue); 
    }

    return(
        <div className="Intro">
            <h1>Budget-O-Meter</h1>
                <input id="user-input-form" type="text" placeholder="$ Goes Here" onChange={handleUserChange}></input>
                <div id="meter" style={meterStyle}>{message}</div>
                <h2 id="user-money-left">${props.userMoneyLeft}/${props.userMoney}</h2>
        </div>
    )
}