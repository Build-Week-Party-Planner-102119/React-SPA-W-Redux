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

  DELETE_EVENT,
  EDIT_EVENT
} from "../actions";

const initialState = {
  events: [],
  user: {},

  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  console.log("I am in reducer().");
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
      // return {
      //   ...state,
      //   events: [...state.events, action.payload],
      //   error: null,
      //   isLoading: false
      // };
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

    case DELETE_EVENT:
      console.log("case delete event");
      const newArr = state.events.filter(item => {
        return item.id !== action.payload;
      });

      return {
        ...state,
        events: newArr,
        error: null,
        isLoading: false
      };
    case EDIT_EVENT:
      console.log("I am in EDIT_EVENT");
      for (let i = 0; i < state.events.length; i++) {
        if (state.events[i].id === action.payload.id) {
          // state.events[i] = action.payload;
          state.events[i].budget = action.payload.budget;
          state.events[i].date = action.payload.date;
          state.events[i].entertainment = action.payload.entertainment;
          state.events[i].guestNumber = action.payload.guestNumber;
          state.events[i].shoppingList = action.payload.shoppingList;
          state.events[i].title = action.payload.title;
        } else {
        }
      }

      return {
        ...state,
        events: state.events,
        error: null,
        isLoading: false
      };
    case GET_USER_EVENTS_START:
      console.log("getting user events firing")
      return {
        ...state,
        error: null,
        isLoading: true
      };
    case GET_USER_EVENTS_SUCCESS:
      return {
        ...state,
        events:  action.payload ,
        isLoading: false,
        error: null
      };
    case GET_USER_EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    // case GET_ALL_EVENTS_START:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: true
    //   };
    // case GET_ALL_EVENTS_SUCCESS:
    //   return {
    //     ...state,
    //     allevents: action.payload,
    //     isLoading: false,
    //     error: null
    //   };
    // case GET_ALL_EVENTS_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };
    default:
      return state;
  }
};
export default reducer;
