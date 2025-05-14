import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, price, photo, supplier, test, details } =
    useLoaderData();
  const navigate = useNavigate();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffee = Object.fromEntries(formData.entries());
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
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
            Update Existing Coffee Details
          </h3>
          <p className="text-center text-base">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Name</legend>
              <input
                type="text"
                defaultValue={name}
                className="input w-full focus:outline-none focus:border-none"
                name="name"
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Chef</legend>
              <input
                type="text"
                defaultValue={chef}
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
                defaultValue={supplier}
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Taste</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="test"
                defaultValue={test}
                placeholder="Enter Coffee Test"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Price</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="price"
                defaultValue={price}
                placeholder="Enter Coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-xl">Details</legend>
              <input
                type="text"
                className="input w-full focus:outline-none focus:border-none"
                name="details"
                defaultValue={details}
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
              defaultValue={photo}
              placeholder="Enter Coffee Photo"
            />
          </fieldset>
          <button
            type="submit"
            className="btn mt-4 w-full bg-[#D2B48C] text-black text-xl"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
