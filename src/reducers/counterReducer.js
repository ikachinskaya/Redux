import ACTION_TYPES from "../actions/actionsType";
const initialState = {
  count: 0,
  step: 1,
};

//передаем значение по умолчанию
function counterReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = {
        ...state,
        count: state.count + state.step,
      };
      return newState;
    }
    case ACTION_TYPES.DECREMENT: {
      const newState = {
        ...state,
        count: state.count - state.step,
      };
      return newState;
    }
    case ACTION_TYPES.SET_STEP: {
      const newState = {
        ...state,
        step: action.newStep,
      };
      return newState;
    }

    default:
      return state;
  }
}

export default counterReducer;
