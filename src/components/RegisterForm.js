import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";
import { Link } from "react-router-dom";
import styled from "styled-components";

//  Styled components
export const FormWrapDiv = styled.div`
  padding: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    padding: 0;
    min-height: 80vh;
  }
`;

export const RegForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

//  End Styled Component

function RegisterForm(props) {
  const [input, setInput] = useState({});

  const handleChanges = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();

    props.registerUser(input);
    setInput({
      username: "",
      password: ""
    });
  };
  return (
    <FormWrapDiv className="FormWrap">
      <h1>Register </h1>
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

        <button className="submitbtn">Register</button>
      </RegForm>
      <Link to="/" className="backbtn">
        <button>return</button>
      </Link>
    </FormWrapDiv>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { registerUser })(RegisterForm);
