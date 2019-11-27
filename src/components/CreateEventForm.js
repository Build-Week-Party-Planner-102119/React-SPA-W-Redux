import React, { useState } from "react";
import { FormWrapDiv, RegForm } from "./RegisterForm";
import { connect } from "react-redux";
import { CreateEvent } from "../actions";

function CreateEventForm(props) {
  const [input, setInput] = useState({
    guestNumber: "",
    date: "",
    budget: "",
    entertainment: "",
    shoppingList: ""
  });

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.CreateEvent(input, props.match.params.id);
    console.log("i am input", input);
    setInput({
      title: "",
      guestNumber: "",
      date: "",
      budget: "",
      entertainment: "",
      shoppingList: ""
    });
    console.log(props);
    props.history.push(`/userpage${props.match.params.id.toString()}`);
  };

  return (
    <FormWrapDiv className="FormWrap">
      <h1>Create Event </h1>
      <RegForm onSubmit={submitForm} className="createform">
        <label>Party Name</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Your Party Name"
          value={input.title}
        />

        <label>Guest Number</label>
        <input
          type="text"
          name="guestNumber"
          onChange={handleChange}
          placeholder="Enter Amount of Guests Attending"
          value={input.guestNumber}
        />

        <label>date </label>
        <input
          type="text"
          name="date"
          onChange={handleChange}
          placeholder="Enter The Date of the Party"
          value={input.date}
        />

        <label>Budget </label>
        <input
          type="text"
          name="budget"
          onChange={handleChange}
          placeholder="Enter the Budget of the Party"
          value={input.budget}
        />

        <label>Entertainmen </label>
        <input
          type="text"
          name="entertainment"
          onChange={handleChange}
          placeholder="Enter what Entertainment will be at the Party"
          value={input.entertainment}
        />

        <label>Shopping List </label>
        <input
          type="text"
          name="shoppingList"
          onChange={handleChange}
          placeholder="Enter what is needed for the Party"
          value={input.shoppingList}
        />

        <button className="submitbtn">Create</button>
      </RegForm>
    </FormWrapDiv>
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
export default connect(mapStateToProps, { CreateEvent })(CreateEventForm);
