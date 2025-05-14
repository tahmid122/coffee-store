import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added",
            text: "Coffee added successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div>
      <div className="w-full">
        <Link
          to={"/"}
          className="flex items-center p-2 text-xl font-bold italic"
        >
          <FaArrowLeft />
          Back to home
        </Link>
      </div>
      <div className="w-10/12 mx-auto bg-[#F4F3F0] rounded-xl p-5 md:p-10 my-10">
        <div className="text-center space-y-5 md:w-10/12 mx-auto">
          <h3 className="text-3xl font-bold text-shadow-md text-shadow-gray-400">
            Add New Coffee
          </h3>
          <p className="text-center text-base">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleAddCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Name</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="name"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Chef</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="chef"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Supplier</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="supplier"
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Taste</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="test"
                placeholder="Enter Coffee Test"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Price</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="price"
                placeholder="Enter Coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Details</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="details"
                placeholder="Enter Coffee Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-xl">Photo URL</legend>
            <input
              type="text"
              className="input w-full focus:outline-none focus:border-none"
              name="photo"
              placeholder="Enter Coffee Photo"
            />
          </fieldset>
          <button
            type="submit"
            className="btn mt-4 w-full bg-[#D2B48C] text-black text-xl"
          >
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
