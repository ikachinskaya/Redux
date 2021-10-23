import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "../reducers";
import rootSaga from "../sagas";
const sagaMiddleware = createSagaMiddleware();

//создаем хранилище для всех состояний
//менять можно только dispatch(action)
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
export default store;
