import { FETCHING_DATA, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  // Array characters, Boolean fetching, null error.
  error: '',
  isFetching: false
};

export const charsReducer = (state = initialState, action) => {
  //console.log(charsReducer);
  switch (action.type) {  
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING_DATA: 
      return {
        ...state,
        error: 'fetching data',
        isFetching: true
      }
    case SUCCESS:
      return {
        ...state,
        error: 'success',
        characters: action.payload 
      }
    case FAILURE: 
    default:
      return state;
  }
};
