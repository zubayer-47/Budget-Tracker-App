import React, { useContext } from "react";
import { Context } from "./Context/Context";

export default function History() {
  const { state, removeBudget } = useContext(Context);

  const onDoubleClick = (e) => {
    e.preventDefault();
    removeBudget(e.target.closest("tr").id);

    setTimeout(() => {
      e.target.closest("tr").remove();
    }, 0);
  };

  const history = () => {
    return state.transactions.map((transaction) => {
      let incomeClassName = "";
      let expenseClassName = "";

      if (transaction.budgetType === "income") {
        incomeClassName = "bg-green-50 text-green-500";
      } else if (transaction.budgetType === "expense") {
        expenseClassName = "bg-red-50 text-red-500";
      }

      const currency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(transaction.amount);

      return (
        <tr
          key={transaction.id}
          className={`py-2 border-b ${
            incomeClassName ? incomeClassName : expenseClassName
          } px-3`}
          id={transaction.id}
        >
          <td className="p-1 capitalize">{transaction.budgetName}</td>
          <td className="p-1 capitalize text-left block">
            {transaction.budgetType}
          </td>
          <td className="p-1">{currency}</td>
        </tr>
      );
    });
  };

  return (
    <div className="my-10 mx-5 md:max-w-lg md:mx-auto p-5 shadow-md bg-gray-50  select-none">
      <h1 className="text-lg uppercase font-mono border-b">History</h1>
      <div className="border p-1 bg-white w-full">
        <table className="border-collapse w-full">
          <thead>
            <tr className="text-left bg-gray-200 font-mono">
              <th className="p-1">Name</th>
              <th className="p-1">Type</th>
              <th className="p-1">Amount</th>
            </tr>
          </thead>
          <tbody onDoubleClick={onDoubleClick}>{history()}</tbody>
        </table>
        {!!state.transactions.length && (
          <span className="text-xs text-gray-500">
            double click to remove budget
          </span>
        )}
      </div>
    </div>
  );
}
