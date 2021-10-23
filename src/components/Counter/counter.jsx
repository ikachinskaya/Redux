import { connect, useSelector, useDispatch } from "react-redux";
import * as actionCreators from "./../../actions/counterCreators";
import { bindActionCreators } from "redux";
function Counter(props) {
  console.log(props);
  // const { count, step, incrementAction, decrementAction, setStepAction } =
  //   props;

  //useSelector - Позволяет извлекать данные из состояния хранилища Redux с помощью функции селектора.
  //1 параметр - селектор - функция, которая говорит, что достать из state
  // const { step, count } = useSelector((state) => {
  //   const {
  //     counter: { step, count },
  //   } = state;
  //   return { step, count };
  // });

  //в одну строчку
  const { step, count } = useSelector(({ counter }) => counter);

  //useDispatch - возвращает ссылку на функцию отправки из хранилища Redux (т.е. dispatch)
  //Вы можете использовать его для отправки действий по мере необходимости.
  const dispatch = useDispatch();

  const { increment, decrement, setStep } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const changeStep = ({ target: { value } }) => setStep(Number(value));

  return (
    <div>
      <h1>Counter is: {count} </h1>
      <input vallue={step} onChange={changeStep} />
      <button onClick={decrement}>Отнять</button>
      <button onClick={increment}>Добавить</button>
    </div>
  );
}

export default Counter;

/* Хуки не создают лишнюю вложенность */
