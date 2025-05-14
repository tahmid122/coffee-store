import React from "react";
import { FaPen } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
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
    <div className="flex items-center md:flex-row flex-col gap-6 bg-[#f5f4f1d8] p-7 rounded-xl min-h-[300px]">
      <img className="w-[185px] h-[240px] object-cover" src={photo} alt="" />
      <div className="flex items-center justify-between w-full">
        <div className="text-lg space-y-2">
          <p>
            <span className="font-bold text-lg">Name:</span> {name}
          </p>
          <p>
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p>
            <span className="font-bold">Price:</span> {price}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link to={`/coffee-details/${_id}`} className="btn bg-[#D2B48C]">
            <IoEye size={20} />
          </Link>

          <Link
            to={`/update-coffee/${_id}`}
            className="btn bg-black text-white"
          >
            <FaPen size={20} />
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-500 text-white"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCars;
