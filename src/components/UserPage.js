import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import UserEvent from "./UserEvent";
import { getUserEvents } from "../actions";

function UserPage(props) {

  console.log("im events", props.events)

  useEffect(() => {
    console.log("useeffect")
    getUserEvents(props.match.params.id);
    console.log("done getting events")
  },[]);

  return (
    <div className="userWeb">
      <img src="/image1.jpg" width="99%" height="450px" />
      <Link
        className="createlink"
        to={`createevent${props.match.params.id.toString()}`}
      >
        Create new event
      </Link>
      <div className="userevent">
        {props.events.map(index => {
          return <UserEvent index={index} />;
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

  { getUserEvents }
)(UserPage);
