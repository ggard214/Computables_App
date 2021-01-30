import { fetch } from "./csrf.js";
const initialState = {};
const LOAD_COOLINGS = "coolings/LOAD_COOLINGS";
const LOAD_COOLARTICLES = "coolings/LOAD_COOLARTICLES";

const getAllCoolings = (payload) => ({
  type: LOAD_COOLINGS,
  payload,
});

const getCool = (payload) => ({
  type: LOAD_COOLARTICLES,
  payload,
});

export const getCoolings = () => async (dispatch) => {
  const response = await fetch("/api/cooling");
  dispatch(getAllCoolings(response.data));
  return response;
};

export const getOneCool = (id) => async (dispatch) => {
  const response = await fetch(`/api/cooling/${id}`);
  dispatch(getCool(response.data));
  return response;
};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_COOLINGS:
      newState = Object.assign({}, state, {
        builds: action.payload.builds,
        // mediaContainer: action.payload.mediaContainer,
      });
      return newState;

    case LOAD_COOLARTICLES:
      newState = Object.assign({}, state, {
        article: action.payload.article,
      });
      return newState;
    default:
      return state;
  }
}

export default reducer;
