import { FETCHING_DATA, SUCCESS, FAILURE } /* we need our action types here*/ from "../actions";
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
        isFetching: true
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload 
      }
    case FAILURE: 
      return {
        ...state,
        error: 'YOU FAILED!'
      }
    default:
      return state;
  }
};
