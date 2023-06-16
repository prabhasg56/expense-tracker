import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div style={{ display: "flex", backgroundColor: "#4b4b4b" }}>
      <Card className="expenses">
        {props.items.map((value, key) => {
          return (
            <ExpenseItem
              title={value.title}
              amount={value.amount}
              date={value.date}
              locationOfExpenditure={value.locationOfExpenditure}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
