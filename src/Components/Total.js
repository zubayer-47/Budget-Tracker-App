import React from "react";
import Balance from "./Balance";
import useCalculations from "./hooks/useCalculations";

export default function Total() {
  const [income, expense] = useCalculations();

  return (
    <div className="mx-5 max-w-lg md:mx-auto px-3 pb-2 my-10 border-t shadow-md border-green-100 rounded-sm bg-green-50">
      <div className="flex justify-around text-center py-2 border-b ">
        <article>
          <p className="font-bold uppercase font-mono">Income: </p>
          <span className="uppercase font-mono text-green-400">{income}</span>
        </article>

        <span className="border-r border-green-200"></span>
        <article className="">
          <p className="font-bold uppercase font-mono">Expense: </p>
          <span className="uppercase font-mono text-red-400">{expense}</span>
        </article>
      </div>

      <Balance />
    </div>
  );
}
