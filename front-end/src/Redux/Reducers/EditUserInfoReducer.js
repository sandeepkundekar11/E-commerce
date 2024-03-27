import { EDIT_USERINFO, LOAD_EDIT_USER, USEREDIT_ERROR } from "../Actions/UserEditAction";

const InitialUserEditInfo = {
    editUserData: null,
    loadingEditUser: false,
    EditUserError: null
}

export const EditUseReducer = (state = InitialUserEditInfo, action) => {
    switch (action.type) {
        case EDIT_USERINFO:
            return {
                editUserData: action.payload,
                loadingEditUser: false,
                EditUserError: null
            }

        case LOAD_EDIT_USER:
            return {
                ...state,
                loadingEditUser: true,
                EditUserError: null
            }

        case USEREDIT_ERROR:
            return {
                ...state,
                loadingEditUser: false,
                EditUserError: action.payload
            }
        default:
            return state;
    }
}