import React from "react";
import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, price, photo, supplier, test, details } = coffee;
  return (
    <div className="bg-[#F5F4F1] p-10 rounded-xl flex items-center gap-6 justify-center w-6/12 mx-auto mt-10">
      <img src={photo} alt="" />
      <div>
        <p>
          <span className="font-bold">Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-bold">Supplier:</span> {supplier}
        </p>
        <p>
          <span className="font-bold">Taste:</span> {test}
        </p>
        <p>
          <span className="font-bold">Price:</span> {price}
        </p>
        <p>
          <span className="font-bold">Details:</span> {details}
        </p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
