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
  CREATE_EVENT,
  DELETE_EVENT,
  EDIT_EVENT
} from "../actions";

const initialState = {
  events: [
    {
      by: 8,
      id: 0,
      guestNumber: "11",
      date: "11",
      budget: "12",
      entertainment: "jtest",
      shoppingList: "test2",
      title: "party"
    },
    {
      by: 9,
      id: 1,
      guestNumber: "52",
      date: "42",
      budget: "6",
      entertainment: "test1",
      shoppingList: "test2",
      title: "arty"
    },
    {
      by: 9,
      id: 2,
      guestNumber: "5",
      date: "4",
      budget: "6787",
      entertainment: "jay-z, kanya west",
      shoppingList: "toiletress, spongebob, oswaldo",
      title: "devins party"
    },
    {
      by: 9,
      id: 3,
      guestNumber: "5",
      date: "4",
      budget: "6787",
      entertainment: "jay-z, kanya west",
      shoppingList: "toiletress, spongebob, oswaldo",
      title: "devins party"
    },
    {
      by: 9,
      id: 4,
      guestNumber: "5",
      date: "4",
      budget: "6787",
      entertainment: "jay-z, kanya west",
      shoppingList: "toiletress, spongebob, oswaldo",
      title: "devins party"
    },
    {
      by: 9,
      id: 5,
      guestNumber: "5",
      date: "4",
      budget: "6787",
      entertainment: "jay-z, kanya west",
      shoppingList: "toiletress, spongebob, oswaldo",
      title: "devins party"
    }
  ],
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
        // user: action.payload,
        isLoading: false,
        error: null
      };
    case SIGN_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
        error: null,
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
    // case GET_USER_EVENTS_START:
    //   return {
    //     ...state,
    //     error: null,
    //     isLoading: true
    //   };
    // case GET_USER_EVENTS_SUCCESS:
    //   return {
    //     ...state,
    //     user: { ...state.user, userevents: action.payload },
    //     isLoading: false,
    //     error: null
    //   };
    // case GET_USER_EVENTS_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isLoading: false
    //   };
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
