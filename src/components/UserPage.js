import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import UserEvent from "./UserEvent";

function UserPage(props) {
  // useEffect(() =>{
  //   axios
  //   .get()
  //   .then()
  //   .catch()
  // })

  return (
    <div className="userWeb">
      <img src = "/image1.jpg" width = "99%" height = "450px"/>
      <Link
        className="createlink"
        to={`createevent${props.match.params.id.toString()}`}
      >
        Create new event
      </Link>
      <div className="userevent">
        {props.events.map(index => {
          if (index.by.toString() === localStorage.getItem("id")) {
            console.log("im in if", index);
            return <UserEvent index={index} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // user: state.user,
    events: state.events,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,

  null
)(UserPage);
