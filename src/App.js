import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import ButtonComponent from "./component/ButtonComponent";
import InputComponent from "./component/InputComponent";
import { createContext, useState } from "react";

export const addTask = createContext();
export const addedTask = createContext();
export const addButton = createContext();
function App() {
  const [task, setTask] = useState("");
  const [getButton, setButton] = useState(0);

  return (
    <addButton.Provider
      value={{
        getButton,
        setButton,
      }}
    >
      <addTask.Provider
        value={{
          task,
          setTask,
        }}
      >
        <addedTask></addedTask>
        <div className="container">
          <InputComponent />
        </div>
      </addTask.Provider>
    </addButton.Provider>
  );
}

export default App;
