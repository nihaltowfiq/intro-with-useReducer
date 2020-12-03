import React, { useReducer, useRef } from "react";
import { patientReducer, patientState } from "../reducers/patientReducer";

const PatientManagement = () => {
  const nameRef = useRef();
  const [state, dispatch] = useReducer(patientReducer, patientState);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_PATIENT",
      id: state.patients.length + 1,
      name: nameRef.current.value,
    });
    nameRef.current.value = "";
  };

  return (
    <div>
      <h1>Patient Management: {state.patients.length}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" required /> <br />
        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
      {state.patients.map((pt) => (
        <li key={pt.id} className="list-group-item">
          ID: {pt.id}, Name: {pt.name}{" "}
          <button
            onClick={() => dispatch({ type: "REMOVE_PATIENT", id: pt.id })}
            className="ml-3 btn btn-danger"
          >
            X
          </button>
        </li>
      ))}
    </div>
  );
};

export default PatientManagement;
