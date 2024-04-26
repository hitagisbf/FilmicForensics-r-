import React from "react";
import { TbChefHat } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
//import "./Footer.css"; // Import the CSS file
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  let tasteProfileElement;
  if (props.tasteProfileOn === "true") {
    tasteProfileElement = <TbChefHat />;
  }
  return (
    <div class="topheader">
      <div id="logo">Filmic Forensics</div>
      <ul class="topnav">
        <NavbarItem path="/Home" name="Home" />
        <NavbarItem path="/Tvshows" name="Tv shows" />
        <NavbarItem path="/Movies" name="Movies" />
        <NavbarItem path="/Genres" name="Genres" />
        <NavbarItem path="/New & Popular" name="New & Popular" />
        <NavbarItem path="/UpcomingReleases" name="UpcomingReleases" />
      </ul>
      <div class="actions">
        <div class="prof-icon">
          <NavLink to="/Search">
            {" "}
            <IoSearch />{" "}
          </NavLink>
        </div>
        <div class="prof-icon">
          <a href="./."> {tasteProfileElement} </a>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

const NavbarItem = ({ path, name }) => {
  return (
    <li>
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default Header;
