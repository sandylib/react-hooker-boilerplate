import { UPDATE_SELECTED_USER } from '../constants/actionConstants';


const userReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_SELECTED_USER: 
            return {
                ...state,
                selected: action.selected
            }
  
        default:
            return state;
    }
  }
  
  export default userReducer;