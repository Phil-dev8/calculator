import React from "react";
import { useReducer } from "react";
import { OperatorButton, NumberButton } from "../styles/Button";
import { GlobalStyle } from "../styles/Globals";

const initialState = {
  number1: "",
  number2: "",
  total: "",
  operator: "",
  input: "",
};

const calc = (n1, n2, operator) => {
  if (operator === "+") {
    return n1 + n2;
  } else if (operator === "-") {
    return n1 - n2;
  } else if (operator === "*") {
    return n1 * n2;
  } else if (operator === "/") {
    return n1 / n2;
  } else {
    return null;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "addition":
      return { ...state, operator: "+", input: state.input + " + " };
    case "soustraction":
      return { ...state, operator: "-", input: state.input + " - " };
    case "multiply":
      return { ...state, operator: "*", input: state.input + " * " };
    case "division":
      return { ...state, operator: "/", input: state.input + " / " };
    case "updateNumberOne":
      return {
        ...state,
        number1: state.number1 + action.payload,
        input: state.input + action.payload,
      };
    case "updateNumberTwo":
      return {
        ...state,
        number2: state.number2 + action.payload,
        input: state.input + action.payload,
      };
    case "reset":
      return {
        ...state,
        number1: "",
        number2: "",
        operator: "",
        total: "",
        input: "",
      };
    case "result":
      return {
        ...state,
        total: calc(
          parseFloat(state.number1),
          parseFloat(state.number2),
          state.operator
        ),
      };

    default:
      return state;
  }
};

export default function Calculator() {
  const buttons = [
    { value: 1, type: "number" },
    { value: 2, type: "number" },
    { value: 3, type: "number" },
    { value: 4, type: "number" },
    { value: 5, type: "number" },
    { value: 6, type: "number" },
    { value: 7, type: "number" },
    { value: 8, type: "number" },
    { value: 9, type: "number" },
    { value: 0, type: "number" },
    { value: "+", type: "operator", action: "addition" },
    { value: "-", type: "operator", action: "soustraction" },
    { value: "*", type: "operator", action: "multiply" },
    { value: "/", type: "operator", action: "division" },
    { value: "=", type: "operator", action: "result" },
    { value: "C", type: "operator", action: "reset" },
  ];

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = (button) => {
    if (button.type === "number") {
      handleNumberClick(button.value);
    } else if (button.type === "operator") {
      dispatch({ type: button.action });
    }
  };

  const handleNumberClick = (number) => {
    if (state.operator === "") {
      dispatch({ type: "updateNumberOne", payload: number });
    } else {
      dispatch({ type: "updateNumberTwo", payload: number });
    }
  };

  const numberButtons = [];
  const operatorButtons = [];

  buttons.forEach((button, index) => {
    const buttonElement = (
      <div key={index}>
        {button.type === "number" ? (
          <NumberButton onClick={() => handleButtonClick(button)}>
            {button.value}
          </NumberButton>
        ) : (
          <OperatorButton onClick={() => handleButtonClick(button)}>
            {button.value}
          </OperatorButton>
        )}
      </div>
    );

    if (button.type === "number") {
      numberButtons.push(buttonElement);
    } else {
      operatorButtons.push(buttonElement);
    }
  });

  return (
    <>
      <GlobalStyle />
      <h1 className="title">CALCULATOR</h1>
      <div className="container">
        <input
          className="input"
          type="text"
          value={state.total ? state.total : state.input}
          readOnly
        />
        <div className="number-button-container">{numberButtons}</div>
        <div className="operator-button-container">{operatorButtons}</div>
      </div>
    </>
  );
}
