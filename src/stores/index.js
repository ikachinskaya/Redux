import { createStore } from "redux";
import reducer from "../reducers"; 

//создаем хранилище для всех состояний
//менять можно только dispatch(action)
const store = createStore(reducer);
export default store;
