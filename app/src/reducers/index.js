import {
    UPDATE_TITLE,
    TOGGLE_EDITING,
    FETCHING_DOG_START,
    FETCHING_DOG_SUCCESS
  } from "../actions";
  
  const initialState = {
    title: "Random Dog!",
    editing: false,
    loading: false,
    dog: null,
    isFetching: false,
    error: ""
  };
  
  export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DOG_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_DOG_SUCCESS:
        return {
          ...state,
          dog: action.payload,
          isFetching: false
        };
      case TOGGLE_EDITING:
        return {
          ...state,
          editing: !state.editing
        };
      case UPDATE_TITLE:
        return {
          ...state,
          title: action.payload,
          editing: false
        };
      default:
        return state;
    }
  };
  