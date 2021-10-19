import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const initialState = {
  count: 0,
  step: 10,
};

//передаем значение по умолчанию
function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "increment": {
      const newState = {
        ...state,
        count: state.count + state.step,
      };
      return newState;
    }
    case "decrement": {
      const newState = {
        ...state,
        count: state.count - state.step,
      };
      return newState;
    }
    case "setStep": {
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

//создаем хранилище для всех состояний
//менять можно только dispatch(action)
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/*
REDUX
  store - хранилище все общих состояний компонента, объект JS
  reducer - функция, принимающая состояние и действие и возвращающая новое состояние
  action - объект, в котором есть свойство type и может быть доп.инфо
*/

/*
REACT-REDUX
  Provider делает хранилище доступным для всех вложенных компонентов
  connect - функция для подписки компонента на обновления хранилища
  mapStateToProps - функция, принимает все состояние и возвращает объект с состоянием для конкретного компонента
*/
