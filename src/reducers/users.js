import { SET_CURRENT_USER } from '../actions/types';


const initialState = {
  loading: false,
  usersList: null,
  works: false
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
      case 'GET_USERS':
        return {
         ...state,
         loading: true
        };
      case 'GET_USERS_SUCCESS':
        return {
          ...state,
          usersList: action.response,
          loading: false
        };
      case 'GET_USERS_FAIL':
        return {
          ...state,
          error: true,
          loading: false
        };
      
    default: return state;
  }
}
