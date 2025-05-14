import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, price, photo, supplier, test, details } = coffee;
  return (
    <div>
      <div className="bg-[url(/11.png)] bg-cover bg-center p-5 md:p-10 rounded-xl flex items-center flex-col  gap-6 justify-center">
        <div className="w-full">
          <Link
            to={"/"}
            className="flex items-center p-2 text-xl font-bold italic"
          >
            <FaArrowLeft />
            Back to home
          </Link>
        </div>
        <div
          className="flex items-start md:items-center md:flex-row flex-col justify-center gap-6 p-5
       md:p-10 bg-[#F4F3F0] w-full md:w-6/12 rounded"
        >
          <img className="h-auto w-auto mx-auto md:mx-0" src={photo} alt="" />
          <div>
            <h4 className="text-xl text-shadow-sm text-shadow-black">
              Niceties
            </h4>
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
      </div>
    </div>
  );
};

export default CoffeeDetails;
