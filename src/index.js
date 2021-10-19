import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./stores";

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
