import React from "react";
import Coffees from "../components/Coffees";
import { useLoaderData } from "react-router";
const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <Coffees coffees={coffees} />
    </div>
  );
};

export default Home;
