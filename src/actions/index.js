import axios from "axios";
import history from "../history";
import axiosWithAuth from "../utilities/AxiosWithAuth";

const registerEndPoint = "https://partyplannerbe.herokuapp.com/auth/register";
const signEndPoint = "https://partyplannerbe.herokuapp.com/auth/login";
const getUserEventsEndPoint = "https://partyplannerbe.herokuapp.com/parties/";
const getAllEventsEndPoint = "https://partyplannerbe.herokuapp.com/parties/";
const CreateEventEndPoint = "https://partyplannerbe.herokuapp.com/parties/";
const deleteEventsEndpoint = "https://partyplannerbe.herokuapp.com/parties/";
const editEventsEndpoint = "https://partyplannerbe.herokuapp.com/parties/";

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const SIGN_USER_START = "SIGN_USER_START";
export const SIGN_USER_SUCCESS = "SIGN_USER_SUCCESS";
export const SIGN_USER_FAILURE = "SIGN_USER_FAILURE";

export const GET_USER_EVENTS_START = "GET_USER_EVENTS_START";
export const GET_USER_EVENTS_SUCCESS = "GET_USER_EVENTS_SUCCESS";
export const GET_USER_EVENTS_FAILURE = "GET_USER_EVENTS_FAILURE";

export const GET_ALL_EVENTS_START = "GET_ALL_EVENTS_START";
export const GET_ALL_EVENTS_SUCCESS = "GET_ALL_EVENTS_SUCCESS";
export const GET_ALL_EVENTS_FAILURE = "GET_ALL_EVENTS_FAILURE";

export const CREATE_EVENT_START = "CREATE_EVENT_START";
export const CREATE_EVENT_SUCCESS = "CREATE_EVENT_SUCCESS";
export const CREATE_EVENT_FAILURE = "CREATE_EVENTET_ALL_EVENTS_FAILURE";

export const DELETE_EVENT_START = "DELETE_EVENT_START";
export const DELETE_EVENT_SUCCESS = "DELETE_EVENT_SUCCESS";
export const DELETE_EVENT_FAILURE = "DELETE_EVENT_FAILURE";

export const EDIT_EVENT_START = "EDIT_EVENT_START";
export const EDIT_EVENT_SUCCESS = "EDIT_EVENT_SUCCESS";
export const EDIT_EVENT_FAILURE = "DELETE_EVENT_FAILURE";

export const registerUser = user => {
  return dispatch => {
    dispatch({ type: REGISTER_USER_START });
    axios
      // dumby endpoint for development purposes
      // .post("https://jsonplaceholder.typicode.com/posts")
      .post(registerEndPoint, user)
      .then(res => {
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data });

        history.push("/");
      })
      .catch(error => {
        dispatch({ type: REGISTER_USER_FAILURE, payload: error });
      });
  };
};
export const signIn = user => {
  return dispatch => {
    dispatch({ type: SIGN_USER_START });
    axios
      .post(signEndPoint, user)
      // dumby endpoint for development purposes
      // .post("https://jso")

      .then(res => {
        // const userobj = { res.data }
        dispatch({
          type: SIGN_USER_SUCCESS,
          payload: { id: res.data.id, username: res.data.username }
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("id", res.data.id);
        history.push(`/userpage${res.data.id}`);
      })
      .catch(error => dispatch({ type: SIGN_USER_FAILURE, payload: error }));
  };
};
export const getUserEvents = id => {
  return dispatch => {
    dispatch({ type: GET_USER_EVENTS_START });
    axiosWithAuth()
      .get(`${getUserEventsEndPoint + id}`)
      .then(res => {
        dispatch({ type: GET_USER_EVENTS_SUCCESS, payload: res.data });
      })
      .catch(error =>
        dispatch({ type: GET_USER_EVENTS_FAILURE, payload: error })
      );
  };
};
export const getALLEvents = () => {
  return dispatch => {
    dispatch({ type: GET_ALL_EVENTS_START });
    axiosWithAuth()
      .get(getAllEventsEndPoint)
      .then(res => {
        dispatch({ type: GET_ALL_EVENTS_SUCCESS, payload: res.data });
      })
      .catch(error =>
        dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
      );
  };
};

export const CreateEvent = (event, id) => {
  return dispatch => {
    dispatch({ type: CREATE_EVENT_START });
    axiosWithAuth()
      .post(`${CreateEventEndPoint + id}`, event)
      .then(res => {
        // dispatch({ type: CREATE_EVENT_SUCCESS, payload: {...event, planner_id:id}});
        dispatch({ type: CREATE_EVENT_SUCCESS });
        history.push(`/userpage${id}`);
      })
      .catch(error =>
        dispatch({ type: GET_ALL_EVENTS_FAILURE, payload: error })
      );
  };
};
export const deleteItem = (id, userId) => {
  console.log("dispatch", id);
  return dispatch => {
    dispatch({ type: DELETE_EVENT_START });
    axiosWithAuth()
      .delete(`${deleteEventsEndpoint + id}`)
      .then(res => {
        dispatch({ type: DELETE_EVENT_SUCCESS });
        axiosWithAuth()
          .get(`${getUserEventsEndPoint + userId}`)
          .then(res => {
            dispatch({ type: GET_USER_EVENTS_SUCCESS, payload: res.data });
          })
          .catch(error =>
            dispatch({ type: GET_USER_EVENTS_FAILURE, payload: error })
          );
      })
      .catch(error => {
        dispatch({ type: DELETE_EVENT_FAILURE, payload: error });
      });
  };
};
export const editItem = (object, id, userId) => {
  return dispatch => {
    dispatch({ type: EDIT_EVENT_START });
    axiosWithAuth()
      .put(`${editEventsEndpoint + id}`, object)
      .then(res => {
        dispatch({ type: EDIT_EVENT_SUCCESS });
        axiosWithAuth()
          .get(`${getUserEventsEndPoint + userId}`)
          .then(res => {
            dispatch({ type: GET_USER_EVENTS_SUCCESS, payload: res.data });
          })
          .catch(error =>
            dispatch({ type: GET_USER_EVENTS_FAILURE, payload: error })
          );
      })
      .catch(error => {
        dispatch({ type: EDIT_EVENT_FAILURE, payload: error });
      });
  };
};
