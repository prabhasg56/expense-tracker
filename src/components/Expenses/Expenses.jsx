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

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((value, key) => {
        return (
          <ExpenseItem
            title={value.title}
            amount={value.amount}
            date={value.date}
            locationOfExpenditure={value.locationOfExpenditure}
            id={value.id}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
