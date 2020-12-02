import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PatientManagement from "./components/PatientManagement";
import ReducerCount from "./components/ReducerCount";

function App() {
  return (
    <div className="App">
      <h1>
        A Simple Introduction of <span className="text-info">useReducer</span>
      </h1>
      <ReducerCount />
      <PatientManagement />
    </div>
  );
}

export default App;
