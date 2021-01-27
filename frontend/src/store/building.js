import { fetch } from "./csrf.js";
const initialState = {};
const LOAD_BUILDINGS = "buildings/LOAD_BUILDINGS";

const getAllBuildings = (payload) => ({
  type: LOAD_BUILDINGS,
  payload,
});

export const getBuildings = () => async (dispatch) => {
  const response = await fetch("/api/building");
  dispatch(getAllBuildings(response.data));
  return response;
};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_BUILDINGS:
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
