import ExpenseItems from "./components/ExpenseItems";

function App() {
  const expenses = [
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
  ];

  return (
    <div>
      {expenses.map((value, key) => {
        return (
          <ExpenseItems
            title={value.title}
            amount={value.amount}
            date={value.date}
            locationOfExpenditure={value.locationOfExpenditure}
          />
        );
      })}
    </div>
  );
}

export default App;
