import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
const rootReducer = combineReducers({
  task: taskReducer,
  counter: counterReducer,
  user: userReducer,
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
