import React from "react";
// components
import Welcome from "./components/Welcome";
import RegisterForm from "./components/RegisterForm";
import SignInForm from "./components/SignInForm";
import Banner from "./components/Banner";
import UserPage from "./components/UserPage";
import Footer from "./components/Footer";
import CreateEventForm from "./components/CreateEventForm";

// css
import "./App.css";
// Routing
import { Route, Redirect } from "react-router-dom";
import AllEventsPage from "./components/AllEventsPage";
// for Protected routing
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};

function App() {
  return (
    <div className="App">
      {/* <Banner /> */}
      <Route path="/" component={Banner} />
      <div className="content">
        <Route exact path="/" component={Welcome} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/signin" component={SignInForm} />
        <ProtectedRoute path="/userpage:id" component={UserPage} />
        <ProtectedRoute path="/createevent:id" component={CreateEventForm} />
        <ProtectedRoute path="/allevents:id" component={AllEventsPage} />
      </div>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
