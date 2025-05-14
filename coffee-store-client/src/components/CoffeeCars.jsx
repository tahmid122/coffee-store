import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCars = ({ coffee, allCoffee, setAllCoffee }) => {
  const { _id, name, chef, price, photo } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const filteredCoffee = allCoffee.filter(
                (coffee) => coffee._id !== id
              );
              setAllCoffee(filteredCoffee);
            }
          });
      }
    });
  };
  return (
    <div className="flex items-center gap-6 bg-[#F5F4F1] p-7 rounded-xl">
      <img className="w-[150px] h-[150px] object-cover" src={photo} alt="" />
      <div className="flex items-center justify-around w-full">
        <div>
          <p>
            <span className="font-bold">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Price:</span> {price}
          </p>
        </div>
        <div className="join join-vertical">
          <Link to={`/coffee-details/${_id}`} className="btn join-item">
            View
          </Link>

          <Link to={`/update-coffee/${_id}`} className="btn join-item">
            Edit
          </Link>
          <button onClick={() => handleDelete(_id)} className="btn join-item">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCars;
