import { connect } from "react-redux";
import * as actionCreators from "./../../actions/counterCreators";
function App(props) {
  console.log(props);
  const { count, step, incrementAction, decrementAction, setStepAction } =
    props;

  const changeStep = ({ target: { value } }) => setStepAction(Number(value));

  return (
    <div>
      <h1>Counter is: {count} </h1>
      <input vallue={step} onChange={changeStep} />
      <button onClick={decrementAction}>Отнять</button>
      <button onClick={incrementAction}>Добавить</button>
    </div>
  );
}

//принимает состояние, возвращает состояние, к-рое д.б. подключено к этому компоненту
//можно отсечь ненужное, взять только нужное
function mapStateToProps(state) {
  const {
    counter: { step, count },
  } = state;
  return { step, count };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementAction: () => dispatch(actionCreators.increment()),
    decrementAction: () => dispatch(actionCreators.decrement()),
    setStepAction: (newStep) => dispatch(actionCreators.setStep(newStep)),
  };
}
//с помощью каррирования
export default connect(mapStateToProps, mapDispatchToProps)(App);

/* 
connect соединяет компонент с хранилищем 
принимает 4 разных, необязательных параметра
mapStateToProps - принимает состояние, возвращает состояние, к-рое д.б. подключено к этому компоненту
*/
