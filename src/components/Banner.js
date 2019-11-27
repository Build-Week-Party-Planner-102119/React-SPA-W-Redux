import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo.png";

function Banner(props) {
  console.log("banner props", props);
  const clickPush = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    props.history.push("/");
  };

  const myid = localStorage.getItem("id");

  return (
    <div className="banner">
      <nav>
        <div>
          <img src={Logo} alt="" width="300px" height="50px" />
        </div>
        <div className="links">
          {localStorage.getItem("token") ? (
            <NavLink to={`allevents${myid}`}>All Events</NavLink>
          ) : null}
          {localStorage.getItem("token") ? (
            <NavLink to={`userpage${myid}`}>My Events</NavLink>
          ) : null}
        </div>
        <div className="register">
          {localStorage.getItem("token") ? (
            <button className="logout" onClick={clickPush}>
              Log Out
            </button>
          ) : null}
        </div>
      </nav>
    </div>
  );
}

export default Banner;
