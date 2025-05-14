import React, { useState } from "react";
import CoffeeCars from "./CoffeeCars";

const Coffees = ({ coffees }) => {
  const [allCoffee, setAllCoffee] = useState(coffees);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allCoffee.map((coffee) => (
        <CoffeeCars
          key={coffee._id}
          coffee={coffee}
          setAllCoffee={setAllCoffee}
          allCoffee={allCoffee}
        />
      ))}
    </div>
  );
};

export default Coffees;
