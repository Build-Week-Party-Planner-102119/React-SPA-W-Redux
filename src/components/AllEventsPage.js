import React, { useState, useEffect } from "react";
import axios from "axios";
import AllEvent from "./AllEvent";
import { connect } from "react-redux";

function AllEventsPage(props) {
  //   useEffect(() => props{
  //     axios
  //       .get()
  //       .then()
  //       .catch();
  //   });
console.log(" im the user",props.user)
  return (
    <>
    <div className = "imagesDiv">
      <img className = "image-1" src = "/allevent0.jpg" width = "200px" />
      <img className = "image-2" src = "/allevent.jpg" width = "200px" />
      <img className = "image-3" src = "/allevent1.jpg" width = "200px" />
      <img src = "/allevent2.jpg" width = "200px" />
      <img src = "/allevent3.jpg" width = "200px" />

    </div>
    <div className="userevent">
      {props.events.map(index => (
        <AllEvent index={index} />
      ))}
    </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    // user: state.user,
    user: state.user,
    events: state.events,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  null
)(AllEventsPage);
