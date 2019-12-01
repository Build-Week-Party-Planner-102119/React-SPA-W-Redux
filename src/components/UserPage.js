import React, {useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";
import UserEvent from "./UserEvent";
import { getUserEvents } from "../actions";

function UserPage(props) {
const userID = props.match.params.id

  useEffect(() => {
    
    props.getUserEvents(userID);
   
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
          return <UserEvent userId={userID} key={index.id} index={index} getUserEvents={getUserEvents}/>;
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // user: state.user,
    events: state.events,
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,

  { getUserEvents }
)(UserPage);
