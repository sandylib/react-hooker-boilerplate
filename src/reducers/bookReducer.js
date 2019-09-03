import { UPDATE_SELECTED_BOOK } from '../constants/actionConstants';

const bookReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_BOOK:
        return {
            ...state,
            selected: action.selected
        }

    default:
      return state;
  }
}

export default bookReducer;