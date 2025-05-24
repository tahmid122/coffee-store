import React, { Suspense } from "react";
import Coffees from "../components/Coffees";
import Banner from "../components/Banner";
import Quality from "../components/Quality";
import Instagram from "../components/Instagram";
const Home = () => {
  return (
    <div>
      <Banner />
      <Quality />
      <Coffees />
      <Instagram />
    </div>
  );
};

export default Home;
