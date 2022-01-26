import React from "react";
import useCalculations from "./hooks/useCalculations";

export default function Balance() {
  // eslint-disable-next-line no-unused-vars
  const [income, expense, leftAmount] = useCalculations();
  return (
    <div className="text-center">
      <p className=" mt-5 text-lg uppercase font-bold font-mono ">Balance:</p>
      <span className="uppercase font-mono text-green-400">{leftAmount}</span>
    </div>
  );
}
