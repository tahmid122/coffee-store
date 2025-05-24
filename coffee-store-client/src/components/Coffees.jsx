import React, { useEffect, useState } from "react";
import CoffeeCars from "./CoffeeCars";
import cup from "../assets/images/more/4.png";
import umbrella from "../assets/images/more/5.png";
import { Link } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const Coffees = () => {
  const [allCoffee, setAllCoffee] = useState([]);
  const { isPending, data } = useQuery({
    queryKey: ["coffees"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/coffees");
      return res.json();
    },
  });
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
        axios.delete(`http://localhost:5000/coffees/${id}`).then((data) => {
          if (data.data.deletedCount) {
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
  useEffect(() => {
    // axios.get("http://localhost:5000/coffees").then((data) => {
    //   setAllCoffee(data.data);
    // });
    setAllCoffee(data);
  }, [data]);
  if (isPending) {
    return <h1>Loading.....</h1>;
  }
  // console.log(allCoffee);
  return (
    <div className="my-20 relative">
      <div className="text-center space-y-3 mb-10">
        <small className="text-sm">--- Sip & Savor ---</small>
        <h3 className="text-3xl font-bold">Our Popular Products</h3>
        <Link
          to={"/add-coffee"}
          className="bg-[#E3B577] cursor-pointer text-white py-2 px-8 rounded border-2 border-amber-900"
        >
          <span className="text-shadow-md text-shadow-black">Add Coffee</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto ">
        {allCoffee?.map((coffee) => (
          <CoffeeCars
            key={coffee._id}
            coffee={coffee}
            setAllCoffee={setAllCoffee}
            allCoffee={allCoffee}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <img className="absolute top-0 w-[200px] -z-10 left-0" src={cup} alt="" />
      <img
        className="absolute bottom-0 w-[300px] -z-10 right-0"
        src={umbrella}
        alt=""
      />
    </div>
  );
};

export default Coffees;
