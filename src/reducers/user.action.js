import { UPDATE_SELECTED_USER } from  '../constants/actionConstants';

export const updateSelectedUser = (dispatch, user) => 
    dispatch ({
        type: UPDATE_SELECTED_USER,
        selected: user
    })
