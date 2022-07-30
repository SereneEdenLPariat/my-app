import React from "react";
import { useNavigate } from "react-router-dom";
import { useReducer } from "react";
import NewForm from "./NewForm";

const defaultState = {
  name: "",
  buttonName: "Add",
  email: "",
  password: "",
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "INPUT_NAME":
      // action.payload --> When you are handling a request, say onclick of an element we need to update the state
      return { ...state, name: action.name };
    case "INPUT_EMAIL":
      return { ...state, email: action.email };
    case "INPUT_PASSWORD":
      return { ...state, password: action.password };
    case "ADD":
      return { ...state, buttonName: "Add" };
    case "SAVE":
      return { ...state, buttonName: "Save" };
    default:
      return "";
  }
};

const SecondPage = () => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, defaultState);

  const onClickHandler = () => {
    if (state.buttonName === "Add") {
      dispatch({ type: "SAVE" });
    } else if (state.buttonName === "Save") {
      dispatch({ type: "ADD" });
    }
  };

  const redirect = () => {
    navigate("/");
  };

  const onHandlesubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit.");
  };

  return (
    <>
      <NewForm
        name={state.name}
        email={state.email}
        password={state.password}
      />

      <h1> Second Page </h1>

      <button onClick={redirect}>Previous</button>

      <form onSubmit={onHandlesubmit}>
        <div>
          <br></br>
          <label htmlFor="inputName">Name:</label>
          <input
            id="inputName"
            value={state.name}
            type="text"
            placeholder="Enter your Name"
            onChange={(e) =>
              dispatch({ type: "INPUT_NAME", name: e.target.value })
            }
          />
        </div>

        <br></br>
        <textarea cols={100} rows={50} disabled={true} value={state.name} />
        <br></br>

        <div>
          <br></br>
          <label htmlFor="inputEmail">Email</label>
          <input
            id="inputEmail"
            value={state.email}
            type="text"
            placeholder="Enter your Email"
            onChange={(e) =>
              dispatch({ type: "INPUT_EMAIL", email: e.target.value })
            }
          />
        </div>
        <br></br>

        <div>
          <br></br>
          <label htmlFor="inputPassword">Password:</label>
          <input
            id="inputPassword"
            value={state.password}
            type="text"
            placeholder="Enter your Email"
            onChange={(e) =>
              dispatch({ type: "INPUT_PASSWORD", password: e.target.value })
            }
          />
        </div>

        <div>
          <br></br>
          <button onClick={onClickHandler}>{state.buttonName}</button>
          &nbsp;
        </div>
      </form>
    </>
  );
};
export default SecondPage;
