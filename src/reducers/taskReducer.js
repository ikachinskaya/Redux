import ACTION_TYPES from "../actions/actionsType";
const initialState = {
  tasks: [
    {
      id: 0,
      text: "Test task",
      isDone: false,
    },
  ],
};

let serial = 1;
//передаем значение по умолчанию
function taskReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.CREATE_TASK: {
      const { tasks } = state;
      const { values: task } = action;
      const newTasks = [...tasks, { ...task, id: serial++ }];
      return {
        ...state,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.UPDATE_TASK: {
      const { tasks } = state;
      const { id, values } = action;
      const newTasks = [...tasks];
      const taskIndex = newTasks.findIndex((task) => task.id === id);
      const task = newTasks[taskIndex];
      const updateTask = { ...task, ...values };
      newTasks[taskIndex] = updateTask;
      return {
        ...state,
        tasks: newTasks,
      };
    }
    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;
      const newTasks = tasks.filter((task) => task.id !== id);
      console.log(newTasks);
      return {
        ...state,
        tasks: newTasks,
      };
    }
    default:
      return state;
  }
}

export default taskReducer;
