import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import img from "../src/images/about.svg";

const About = () => {
  return (
    <Common
      name="Welcome to About Page"
      imgsrc={img}
      visit="/contact"
      btname="Contact Now"
    />
  );
};

export default About;
