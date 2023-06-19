import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "India",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    locationOfExpenditure: "Us",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "UK",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "India",
  },
  {
    id: "e5",
    title: "Table",
    amount: 650,
    date: new Date(2023, 5, 20),
    locationOfExpenditure: "India",
  },
  {
    id: "e6",
    title: "Car",
    amount: 1000,
    date: new Date(2023, 6, 20),
    locationOfExpenditure: "India",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const enteredExpense = (enteredExpenseData) => {
    setExpenses((prevExpense) => {
      console.log(enteredExpenseData)
      return [enteredExpenseData, ...prevExpense];
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#4b4b4b",
        width: "100%",
        height: "100%",
      }}
    >
      <NewExpense onSaveExpenseData={enteredExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
