import { fetch } from "./csrf.js";
const initialState = {};
const LOAD_OCS = "ocs/LOAD_OCS";
const LOAD_OCARTICLES = "ocs/LOAD_OCARTICLES"

const getAllOcs = (payload) => ({
  type: LOAD_OCS,
  payload,
});

const getOc = (payload) => ({
  type: LOAD_OCARTICLES,
  payload,
});

export const getOcs = () => async (dispatch) => {
  const response = await fetch("/api/overclocking");
  dispatch(getAllOcs(response.data));
  return response;
};

export const getOneOc = (id) => async (dispatch) => {
  const response = await fetch(`/api/overclocking/${id}`);
  dispatch(getOc(response.data));
  return response;
};

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_OCS:
      newState = Object.assign({}, state, {
        builds: action.payload.builds,
        // mediaContainer: action.payload.mediaContainer,
      });
      return newState;

    case LOAD_OCARTICLES:
      newState = Object.assign({}, state, {
        article: action.payload.article,
      });
      return newState;
    default:
      return state;
  }
}

export default reducer;
