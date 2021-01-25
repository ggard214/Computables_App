import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";
import bubblebop from "./images/homeicon.png";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink className="signupbutton" to="/signup">| Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul id="top-nav-bar">
      <div id="navspace">
        <li>
          <NavLink exact to="/">
            <img className="homeicon" src={bubblebop} alt="home" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/building">Building</NavLink>
        </li>
        <li>
          <NavLink to="/cooling">Cooling</NavLink>
        </li>
        <li>
          <NavLink to="/overclocking">Overclocking</NavLink>
        </li>
        <li>
          <NavLink to="/modification">Modification</NavLink>
        </li>
      </div>
      <li className="logsign">
        {isLoaded} {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
