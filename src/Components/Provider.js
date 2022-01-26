import { useReducer } from "react";
import { Context } from "./Context/Context";

const initialState = {
  transactions: [{id: '1asdasdsa', amount: 200, budgetType: 'income', budgetName: 'school'}, {id: 'asdasdsa', amount: 202,budgetName: 'school', budgetType: 'expense'},{id: 2, amount: 20,budgetName: 'school', budgetType: 'income'}],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCOME":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    case "DELETE_BUDGET":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteExpense = (id) => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  };

  const deleteIncome = (id) => {
    dispatch({
      type: "DELETE_INCOME",
      payload: id,
    });
  };

  const addIncome = (payload) => {
    dispatch({
      type: "INCOME",
      payload,
    });
  };

  const addExpense = (payload) => {
    dispatch({
      type: "EXPENSE",
      payload,
    });
  };

  console.log(state);
  return (
    <Context.Provider
      value={{ state, dispatch, deleteExpense, deleteIncome, addExpense, addIncome }}
    >
      {children}
    </Context.Provider>
  );
}
