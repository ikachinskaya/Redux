import { connect } from "react-redux";
import * as actionCreators from "./actions/index";
function App(props) {
  //console.log(props);
  const { count, step, dispatch } = props;

  const increment = () => dispatch(actionCreators.increment());

  const decrement = () => dispatch(actionCreators.decrement());

  const changeStep = ({ target: { value } }) => {
    dispatch(actionCreators.setStep(Number(value)));
  };

  return (
    <div>
      <h1>Counter is: {count} </h1>
      <input vallue={step} onChange={changeStep} />
      <button onClick={decrement}>Отнять</button>
      <button onClick={increment}>Добавить</button>
    </div>
  );
}

//принимает состояние, возвращает состояние, к-рое д.б. подключено к этому компоненту
//можно отсечь ненужное, взять только нужное
function mapStateToProps(state) {
  return state;
}
//============================================
//соединяет компонент с хранилищем
//const withProps = connect(mapStateToProps);
//============================================

//новый компонент с пропсами
//компонент высшего порядка
//вернет новый компонент
//const AppWithProps = withProps(App);

//============================================
//export default AppWithProps;
//============================================

//с помощью каррирования
export default connect(mapStateToProps)(App);

/* 
connect соединяет компонент с хранилищем 
принимает 4 разных, необязательных параметра
mapStateToProps - принимает состояние, возвращает состояние, к-рое д.б. подключено к этому компоненту
*/
