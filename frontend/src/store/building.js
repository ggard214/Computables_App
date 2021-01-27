import { fetch } from "./csrf.js";
const initialState = {};
const LOAD_BUILDINGS = "buildings/LOAD_BUILDINGS";
const LOAD_ARTICLES = "buildings/LOAD_ARTICLES"

const getAllBuildings = (payload) => ({
  type: LOAD_BUILDINGS,
  payload,
});

const getBuild = (payload) => ({
  type: LOAD_ARTICLES,
  payload,
})

export const getBuildings = () => async (dispatch) => {
  const response = await fetch("/api/building");
  dispatch(getAllBuildings(response.data));
  return response;
};

export const getOneBuild = (id) => async (dispatch) => {
  const response = await fetch(`/api/building/${id}`);
  dispatch(getBuild(response.data));
  return response;
  };


function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case LOAD_BUILDINGS:
      newState = Object.assign({}, state, {
        builds: action.payload.builds,
        // mediaContainer: action.payload.mediaContainer,
      });
      return newState;
      
    case LOAD_ARTICLES:
      newState = Object.assign({}, state, {
        article: action.payload.article
        
      });
      return newState;
    default:
      return state;
  }
}

export default reducer;
