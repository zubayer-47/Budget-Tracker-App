import { useReducer } from "react";
import { Context } from "./Context/Context";

const initialState = {
  transactions: JSON.parse(localStorage.getItem('Budget')).transactions,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "BUDGET": {

      const data = JSON.parse(localStorage.getItem("Budget")).transactions || [];
      const stringObject = JSON.stringify({...action.payload});

      localStorage.setItem("Budget", [stringObject, ...data]);

      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    }
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

  const addBudget = (payload) => {
    dispatch({
      type: "BUDGET",
      payload,
    });
  };

  const removeBudget = id => {
    dispatch({
      type: "DELETE_BUDGET",
      payload: id
    })
  }

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        addBudget,
        removeBudget
      }}
    >
      {children}
    </Context.Provider>
  );
}
