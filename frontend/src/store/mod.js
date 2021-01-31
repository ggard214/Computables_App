import { fetch } from "./csrf.js";
const initialState = {};
const LOAD_MODS = "mods/LOAD_MODS";
const LOAD_MODARTICLES = "mods/LOAD_MODARTICLES";

const getAllMods = (payload) => ({
  type: LOAD_MODS,
  payload,
});

const getMod = (payload) => ({
  type: LOAD_MODARTICLES,
  payload,
});

export const getMods = () => async (dispatch) => {
  const response = await fetch("/api/modification");
  dispatch(getAllMods(response.data));
  return response;
};

export const getOneMod = (id) => async (dispatch) => {
  const response = await fetch(`/api/modification/${id}`);
  dispatch(getMod(response.data));
  return response;
};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_MODS:
      newState = Object.assign({}, state, {
        builds: action.payload.builds,
        mediaContainer: action.payload.mediaContainer,
      });
      return newState;

    case LOAD_MODARTICLES:
      newState = Object.assign({}, state, {
        article: action.payload.article,
      });
      return newState;
    default:
      return state;
  }
}

export default reducer;
