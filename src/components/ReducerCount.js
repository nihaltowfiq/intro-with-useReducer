import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const ReducerCount = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>This is Reducer count: {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        className="btn btn-success mr-2"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        className="btn btn-danger ml-2"
      >
        Decrement
      </button>
    </div>
  );
};

export default ReducerCount;
