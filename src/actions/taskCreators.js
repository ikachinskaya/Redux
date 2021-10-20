import ACTION_TYPES from "./actionsType";

export const createTask = (values) => {
  return {
    type: ACTION_TYPES.CREATE_TASK,
    values,
  };
};

export const updateTask = ({ id, values }) => {
  return {
    type: ACTION_TYPES.UPDATE_TASK,
    values,
    id,
  };
};

export const deleteTask = (id) => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    id,
  };
};
