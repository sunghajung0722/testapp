import ButtonComponent from "./ButtonComponent";
import TaskComponent from "./TaskComponent";
import { PostList, TodoList } from "../response/RestApi";
import { useContext, useEffect, useState } from "react";
import { addButton, addTask } from "../App";
import "./component_css/InoutComponent_module.css";

const InputComponent = () => {
  const { task, setTask } = useContext(addTask);
  const [getTodoApi, setTodoApi] = useState([]);
  const { getButton, setButton } = useContext(addButton);

  useEffect(() => {
    TodoList().then((data) => {
      setTodoApi(data.results);
    });
  }, [getTodoApi]);

  console.log(task);
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">To Do List</h2>
            </div>
            <div className="card-body">
              <>
                <div className="input-group mb-3">
                  <input
                    onChange={(e) => setTask(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Add new task"
                    required
                  />
                  <button
                    onClick={() => PostList(task)}
                    className="btn btn-secondary"
                  >
                    Add
                  </button>
                </div>
              </>
              {getTodoApi.map((_list) => {
                return <TaskComponent list={_list} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputComponent;
