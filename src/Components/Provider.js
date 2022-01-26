import { useReducer } from "react";
import { Context } from "./Context/Context";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("Budget")).transactions,
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

  localStorage.setItem("Budget", JSON.stringify(state));

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

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        deleteExpense,
        deleteIncome,
        addExpense,
        addIncome,
      }}
    >
      {children}
    </Context.Provider>
  );
}
