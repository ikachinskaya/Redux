import { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      const newState = {
        ...state,
        count: state.count + 1,
      };
      return newState;
    }
    case "decrement": {
      const newState = {
        ...state,
        count: state.count - 1,
      };
      return newState;
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => {
    const action = {
      type: "increment",
    };
    dispatch(action);
  };

  const decrement = () => {
    const action = {
      type: "decrement",
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>Counter is: {state.count}</h1>
      <button onClick={decrement}>Отнять</button>
      <button onClick={increment}>Добавить</button>
    </div>
  );
}

export default App;
