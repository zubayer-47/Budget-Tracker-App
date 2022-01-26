import React, { useContext, useState } from "react";
import { v4 } from "uuid";
import { Context } from "./Context/Context";

export default function Budget(props) {
  const [amount, setAmount] = useState(0);
  const [budgetName, setBudgetName] = useState("");
  const [budgetType, setBudgetType] = useState("income");
  const [isIncome, setIsIncome] = useState(false);
  const { addIncome } = useContext(Context);

  const onSubmit = (e) => {
    e.preventDefault();

    if (amount && budgetType.length && budgetName.length) {
      addIncome({
        id: `${v4()}`,
        amount: +amount,
        budgetName,
        budgetType,
      });
      
      setAmount(0);
      setBudgetType("income");
      setBudgetName("");
    } else {
      setIsIncome(true);
    }
  };

  return (
    <div className="py-2 px-3 border my-1">
      <h1 className="text-blue-400 text-lg mb-1">Income</h1>
      <form onSubmit={onSubmit}>
        <div className="my-2">
          <label htmlFor="incomeType" className="text-gray-700">
            Budget Name
          </label>
          <input
            className={`outline-none border ${
              isIncome ? "border-red-400" : "border-blue-100"
            } block my-1 p-1 rounded-sm w-full`}
            type="text"
            id="incomeType"
            name="incomeType"
            value={budgetName}
            placeholder="Enter Income Type"
            onChange={(e) => setBudgetName(e.target.value)}
          />
        </div>

        <div className="my-2">
          <label htmlFor="income" className="text-gray-700">
            Budget Amount
          </label>
          <input
            className={`outline-none border ${
              isIncome ? "border-red-400" : "border-blue-100"
            } block my-1 p-1 rounded-sm w-full`}
            type="number"
            id="income"
            name="income"
            value={amount}
            placeholder="Enter Income Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="my-2">
          <label htmlFor="type" className="text-gray-700">
            Budget Type
          </label>
          <select
            name="budgetType"
            id="type"
            className={`outline-none border ${
              isIncome ? "border-red-400" : "border-blue-100"
            } block my-1 p-1 rounded-sm w-full bg-gray-50`}
            value={budgetType}
            onChange={(e) => setBudgetType(e.target.value)}
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <input
          type="submit"
          className="px-2 py-1 bg-blue-400 text-gray-50 rounded-sm cursor-pointer"
          value="Update Income"
        />
      </form>
    </div>
  );
}
