import { DELETE, DELETE_ERROR, DELETE_LOADING } from "../Actions/DeleteAction";

const InitialDeleteData = {
  DeleteInfo: null,
  DeleteLoading: false,
  DeleteErr: null,
};

export const DeleteReducer = (state = InitialDeleteData, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        DeleteInfo: action.payload,
        DeleteLoading: false,
        DeleteErr: null,
      };
    case DELETE_LOADING:
      return {
        ...state,
        DeleteLoading: true,
        DeleteErr: null,
      };
    case DELETE_ERROR:
      return {
        ...state,
        DeleteLoading: false,
        DeleteErr: action.payload,
      };
    default:
      return state;
  }
};
