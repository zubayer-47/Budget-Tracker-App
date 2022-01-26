import { useContext } from "react";
import { Context } from "../Context/Context";

export default function useCalculations() {
  const { state } = useContext(Context);

  let incomeList = [];
  let expenseList = [];
  let expense = 0;
  let income = 0;

  state.transactions.forEach((v) => {
    if (v.budgetType === "income") {
      incomeList.push(v);

      income += v.amount;
    } else {
      expenseList.push(v);

      expense += v.amount;
    }
  });

  let leftAmount = income - expense;

  leftAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(leftAmount);

  expense = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(expense);

  income = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(income);

  return [income, expense, leftAmount];
}
