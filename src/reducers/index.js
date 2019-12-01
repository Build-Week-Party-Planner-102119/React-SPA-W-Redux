import {
  // register user
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  //   Sign In User
  SIGN_USER_START,
  SIGN_USER_SUCCESS,
  SIGN_USER_FAILURE,
  //   get users event cards
  GET_USER_EVENTS_START,
  GET_USER_EVENTS_SUCCESS,
  GET_USER_EVENTS_FAILURE,
  // get all event cards
  GET_ALL_EVENTS_START,
  GET_ALL_EVENTS_SUCCESS,
  GET_ALL_EVENTS_FAILURE,
  // create event
  CREATE_EVENT_START,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  // delete event
  DELETE_EVENT_START,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_FAILURE,
  // edit events
  EDIT_EVENT_START,
  EDIT_EVENT_SUCCESS,
  EDIT_EVENT_FAILURE
} from "../actions";

const initialState = {
  events: [],
  user: {},

  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  console.log("action.type: " + action.type);
  switch (action.type) {
    case REGISTER_USER_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SIGN_USER_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case SIGN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        error: null
      };
    case SIGN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case CREATE_EVENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case CREATE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_USER_EVENTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_USER_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
        error: null
      };
    case GET_USER_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_ALL_EVENTS_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_ALL_EVENTS_SUCCESS:
      return {
        ...state,
        events: action.payload,
        isLoading: false,
        error: null
      };
    case GET_ALL_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case DELETE_EVENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case DELETE_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case DELETE_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case EDIT_EVENT_START:
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case EDIT_EVENT_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      };
    case EDIT_EVENT_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
export default reducer;
