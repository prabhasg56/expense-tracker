import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    if (filteredYear === "Select year") {
      return true;
    } else if (item.date.getFullYear().toString() === filteredYear) {
      return true;
    }
  });

  let expensesContent = <p style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize: 20}}>No expenses found!</p>
  const addMoreItems = (filteredExpenses.length === 1)? <p style={{textAlign:'center', color:'white', fontWeight:'bold', fontSize: 20}}>Only single Expense here. Please add more...</p> : ""

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((value, key) => {
      return (
        <ExpenseItem
          key={value.id}
          title={value.title}
          amount={value.amount}
          date={value.date}
          locationOfExpenditure={value.locationOfExpenditure}
          id={value.id}
        />
      );
    })
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContent}
      {addMoreItems}
    </Card>
  );
};

export default Expenses;
