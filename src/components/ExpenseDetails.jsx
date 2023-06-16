import "./ExpenseItems.css";

const ExpenseDetails = ({ location, amount }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div className="expense-item__price">{location}</div>
      <div className="expense-item__price"> ${amount}</div>
    </div>
  );
};

export default ExpenseDetails;
