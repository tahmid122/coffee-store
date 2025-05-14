import React from "react";
import { useLoaderData, useNavigate } from "react-router";
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
      {" "}
      <div className="w-10/12 mx-auto bg-gray-100 rounded-xl p-10 my-10">
        <div className="text-center space-y-5">
          <h3 className="text-3xl font-bold">Update Existing Coffee</h3>
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
              <legend className="fieldset-legend">Name</legend>
              <input
                type="text"
                className="input w-full"
                name="name"
                defaultValue={name}
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Chef</legend>
              <input
                type="text"
                className="input w-full"
                name="chef"
                defaultValue={chef}
                placeholder="Enter Coffee Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Supplier</legend>
              <input
                type="text"
                className="input w-full"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter Coffee Supplier"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Test</legend>
              <input
                type="text"
                className="input w-full"
                name="test"
                defaultValue={test}
                placeholder="Enter Coffee Test"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Price</legend>
              <input
                type="text"
                className="input w-full"
                name="price"
                defaultValue={price}
                placeholder="Enter Coffee Price"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Details</legend>
              <input
                type="text"
                className="input w-full"
                name="details"
                defaultValue={details}
                placeholder="Enter Coffee Details"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input w-full"
              name="photo"
              defaultValue={photo}
              placeholder="Enter Coffee Photo"
            />
          </fieldset>
          <button
            type="submit"
            className="btn mt-4 w-full bg-amber-700 text-white"
          >
            Update Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
