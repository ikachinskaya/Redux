import ACTION_TYPES from "../actions/actionsType";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

function userReducer(state = initialState, action) {
  switch (action.types) {
    case ACTION_TYPES.CREATE_USER_REQUEST: {
      const newState = {
        ...state,
        isLoading: true,
      };
      return newState;
    }
    case ACTION_TYPES.CREATE_USER_SUCCES: {
      const { values: user } = action;
      const newState = {
        ...state,
        users: [...state.users, user],
        isLoading: false,
      };
      return newState;
    }
    case ACTION_TYPES.CREATE_USER_ERROR: {
      const { error } = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default userReducer;
