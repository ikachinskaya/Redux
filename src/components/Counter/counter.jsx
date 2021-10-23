import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "./../../actions/counterCreators";

function Counter(props) {
  console.log(props);
  // const { count, step, incrementAction, decrementAction, setStepAction } =
  //   props;

  //useSelector - Позволяет извлекать данные из состояния хранилища Redux с помощью функции селектора.
  //1 параметр - селектор - функция, которая говорит, что достать из state
  const { step, count } = useSelector((state) => {
    const {
      counter: { step, count },
    } = state;
    return { step, count };
  });

  //useDispatch - возвращает ссылку на функцию отправки из хранилища Redux (т.е. dispatch)
  //Вы можете использовать его для отправки действий по мере необходимости.
  const dispatch = useDispatch();

  const incrementAction = () => dispatch(actionCreators.increment());
  const decrementAction = () => dispatch(actionCreators.decrement());
  const setStepAction = (newStep) => dispatch(actionCreators.setStep(newStep));

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
// function mapStateToProps(state) {
//   const {
//     counter: { step, count },
//   } = state;
//   return { step, count };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     incrementAction: () => dispatch(actionCreators.increment()),
//     decrementAction: () => dispatch(actionCreators.decrement()),
//     setStepAction: (newStep) => dispatch(actionCreators.setStep(newStep)),
//   };
// }

export default Counter;

/* 
connect соединяет компонент с хранилищем 
принимает 4 разных, необязательных параметра
mapStateToProps - принимает состояние, возвращает состояние, к-рое д.б. подключено к этому компоненту
*/
