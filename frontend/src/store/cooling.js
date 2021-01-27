import { fetch } from "./csrf.js";
const initialState = {};
const LOAD_COOLINGS = "buildings/LOAD_COOLINGS";

const getAllCoolings = (payload) => ({
  type: LOAD_COOLINGS,
  payload,
});

export const getCoolings = () => async (dispatch) => {
  const response = await fetch("/api/cooling");
  dispatch(getAllCoolings(response.data));
  return response;
};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_COOLINGS:
      newState = Object.assign({}, state, {
        builds: action.payload.builds,
        mediaContainer: action.payload.mediaContainer,
      });
      return newState;
    default:
      return state;
  }
}

export default reducer;
