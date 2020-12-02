import React, { useReducer, useRef } from "react";
import { patientReducer, patientState } from "../reducers/patientReducer";

const PatientManagement = () => {
  const nameRef = useRef();
  const [state, dispatch] = useReducer(patientReducer, patientState);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value);
  };

  return (
    <div>
      <h1>Patient Management: {state.patients.length}</h1>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} type="text" required /> <br />
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PatientManagement;
