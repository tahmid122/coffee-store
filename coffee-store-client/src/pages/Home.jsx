import React from "react";
import Coffees from "../components/Coffees";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <Banner />
      <Coffees coffees={coffees} />
    </div>
  );
};

export default Home;
