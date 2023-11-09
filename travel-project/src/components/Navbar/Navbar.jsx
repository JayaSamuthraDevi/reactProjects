import "./Navbar.scss";
import React, { useState } from "react";
import { BiLogoMediumOld } from "react-icons/bi";
import { PiDotsNineBold } from "react-icons/pi";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  // state to track and update navbar
  const [navBar, setNavBar] = useState("menu");
  // function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  };
  // function to remove navbar
  const removeNavBar =() => {
    setNavBar ("menu");
  }

  return (
    <div className="navBar">
      <div className="logoDiv">
        <BiLogoMediumOld className="icon" />
        <span> OU-Trips</span>
      </div>
      <div className={navBar}>
        <ul>
          <li className="navList">Destination</li>
          <li className="navList">About Us</li>
          <li className="navList">Testimonial</li>
          <li className="navList">Gallery</li>
        </ul>
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
      </div>

      <button className="signUpBtn btn">Sign Up</button>
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  );
};

export default Navbar;
