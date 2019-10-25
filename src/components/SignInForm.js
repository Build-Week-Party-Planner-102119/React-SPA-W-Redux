import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../actions";
import { Link } from "react-router-dom";
import { FormWrapDiv, RegForm } from "./RegisterForm";

function SignInForm(props) {
  const [input, setInput] = useState({});

  const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.signIn(input);
    setInput({
      username: "",
      password: ""
    });
  };
  return (
    <FormWrapDiv className="FormWrap">
      <h1>Sign In</h1>
      {props.isLogging && <div>Loading</div>}
      <RegForm onSubmit={submitForm}>
        <label>Username</label>
        <input
          type="text"
          name="username"
          onChange={handleChanges}
          placeholder="Enter username"
          value={input.username}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChanges}
          placeholder="Enter Password"
          value={input.password}
        />
              {props.error && <div>{props.error.message}</div>}

        <button className="submitbtn">Sign In</button>
      </RegForm>
      <Link to="/" className="backbtn">
        <button>return</button>
      </Link>
    </FormWrapDiv>
  );
}

const mapStateToProps = state => {
  return {
    // user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  { signIn }
)(SignInForm);
