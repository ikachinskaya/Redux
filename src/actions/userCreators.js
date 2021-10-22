import ACTION_TYPES from "./actionsType";

//запрос на создание пользователя
export function createUserRequest(userData = {}) {
  const action = {
    type: ACTION_TYPES.CREATE_USER_REQUEST,
    userData,
  };
  return action;
}

//успешный запрос
export const createUserSuccess = (values) => {
  return {
    type: ACTION_TYPES.CREATE_USER_SUCCES,
    values,
  };
};

//ошибка
export const createUserError = (error) => {
  return {
    type: ACTION_TYPES.CREATE_USER_ERROR,
    error,
  };
};
