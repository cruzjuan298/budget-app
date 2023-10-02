import React, { useState } from "react";
import IconImage from "./images/add-icon.png";
import RemoveIcon from "./images/remove-icon.png"

export default function Expenses(props) {
  const [addedExpenses, setAddedExpenses] = useState([]); //intializing state
  const [expenseValues, setExpenseValues] = useState([]); //intializing state
  console.log("addedExpenses:", addedExpenses);
console.log("expenseValues:", expenseValues);

  function addExpense() {
    const newExpenseId = Date.now()
    const newExpenseIndex = addedExpenses.length;
    const userNewExpense = (
      <div className="new-expense" key={newExpenseId}>
        <input
          id={`written-expense-${newExpenseIndex}`}
        ></input>
        <input
          id={`money-expense-${newExpenseIndex}`}
          type="number"
          onChange={(event) =>
            handleExpenseValueChange(event, newExpenseIndex)
          }
        ></input>
        <img alt="remove-icon" src={RemoveIcon} id={`remove-expense-${newExpenseIndex}`} onClick={() => handleDeleteExpenseValue(newExpenseId, newExpenseIndex)} />
      </div>
    );
    setAddedExpenses([...addedExpenses, userNewExpense]);
    setExpenseValues([...expenseValues, { written: "", money: 0, id: newExpenseId}]);
  } //adds functionalitly to add expense button

  function handleExpenseValueChange(event, expenseIndex) {
    const { id, value } = event.target; //getting the id and corresponding value of the expense element
    const field = id.split("-")[0]; 
    const newExpenseValues = [...expenseValues]; //accessing existing expenses array.
    newExpenseValues[expenseIndex] = {
      ...newExpenseValues[expenseIndex],
      [field]: field === "money" ? parseFloat(value) : value,
    };

    const totalExpenses = newExpenseValues.reduce(
    (total, expense) => total + (expense.money || 0),0);
    const userMoneyLeft = props.userMoney - totalExpenses;
    props.setUserMoneyLeft(userMoneyLeft);

    setExpenseValues(newExpenseValues);
  }

  function handleDeleteExpenseValue(expenseId) {
    const newAddedExpenses = addedExpenses.filter(
      (expense) => expense.key !== expenseId);
    const newExpenseValues = expenseValues.filter(
      (expense) => expense.id !== expenseId);

    setAddedExpenses(newAddedExpenses);
    setExpenseValues(newExpenseValues);
  }

  return (
    <div>
      <h2 className="expenses">
        Add Expenses
        <img onClick={addExpense} src={IconImage} alt="add-icon" />
      </h2>
      {addedExpenses}
    </div>
  );
}
