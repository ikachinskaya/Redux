import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  task: taskReducer,
  counter: counterReducer,
});

export default rootReducer;

const revReduxState = {
  tasks: [],
  step: 1,
  count: 1,
};
const currentReduxState = {
  counter: {
    step: 1,
    count: 0,
  },
  task: {
    tasks: [],
  },
};
