// Action creators
import axios from "axios";

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";
export const FETCHING_DOG_START = "FETCHING_DOG_START";
export const FETCHING_DOG_SUCCESS = "FETCHING_DOG_SUCCESS";
export const FETCHING_DOG_FAILURE = "FETCHING_DOG_FAILURE";

export function toggleEditing() {
  return { type: "TOGGLE_EDITING" };
}

export const updateTitle = newTitle => {
  return { type: "UPDATE_TITLE", payload: newTitle };
};

const headers = {
  Accept: "application/json"
};

export const getDog = () => dispatch => {
  dispatch({ type: FETCHING_DOG_START });
  axios
    .get("https://dog.ceo/api/breeds/image/random", { headers })
    .then(res => {
      console.log("api: ",res);
      dispatch({ type: FETCHING_DOG_SUCCESS, payload: res.data.message });
    })
    .catch(err => {
      console.log("api error: ", err);
    //   dispatch({
    //     type: FETCHING_QUOTE_FAILURE,
    //     payload: err.response.message
    //   });
    });
};
