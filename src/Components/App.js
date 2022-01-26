import React from "react";
import Budget from "./Budget";
import Header from "./Header";
import History from "./History";
import Provider from "./Provider";
import Total from "./Total";

export default function App() {
  return (
    <Provider>
      <Header />
      <Total />
      <div className="my-10 mx-5 max-w-lg md:mx-auto p-5 shadow-md bg-gray-50">
        <Budget />
      </div>
      <History />
    </Provider>
  );
}
