import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import img from "../src/images/home.svg";

const Home = () => {
  return (
    <Common
      name="Grow your business with"
      imgsrc={img}
      visit="/services"
      btname="Get Started"
    />
  );
};

export default Home;
