import React from "react";
import Coffees from "../components/Coffees";
import { useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Quality from "../components/Quality";
import Instagram from "../components/Instagram";
const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <Banner />
      <Quality />
      <Coffees coffees={coffees} />
      <Instagram />
    </div>
  );
};

export default Home;
