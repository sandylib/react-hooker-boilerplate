import { UPDATE_SELECTED_BOOK } from  '../constants/actionConstants';

export const updateSelectedBook = (dispatch, book) => 
    dispatch ({
        type: UPDATE_SELECTED_BOOK,
        selected: book
    })
