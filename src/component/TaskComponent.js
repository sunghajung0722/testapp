import { useContext, useEffect, useState } from "react";
import { DeleteList, UpdateList } from "../response/RestApi";
import { addButton, addTask, addedTask } from "../App";
import EditComponent from "./EditComponent";

const TaskComponent = ({ list }) => {
  const { _task, setTask } = useContext(addTask);
  const { addtask, setaddTask } = useContext(addedTask);
  const [setClick, getClick] = useState("");
  const { id } = list;
  const { task } = list;
  const { status } = list;
  const StringVal = "#" + id;
  return (
    <>
      <>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setaddTask(e.target.value)}
            defaultValue={task}
            style={
              status === "complete"
                ? {
                    textDecoration: "line-through",
                    marginBottom: "8px",
                    fontSize: "16px",
                    color: "#555",
                  }
                : {}
            }
            type="text"
            className="form-control"
            placeholder="Add new task"
            required
          />
          <div className="btn-group">
            <button
              onClick={() => DeleteList(id)}
              className="btn btn-danger btn-sm delete-btn"
            >
              Delete
            </button>
            <button
              type="button"
              class="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target={StringVal}
              onClick={() => getClick(id)}
            >
              Edit
            </button>
            <button
              onClick={() => UpdateList(id, addtask, status)}
              className="btn btn-success btn-sm edit-btn"
            >
              Complete
            </button>

        
            <EditComponent setClick={setClick} list={list} />
            {/* <button
              onClick={() => UpdateList(id, addtask, status)}
              className="btn btn-warning btn-sm edit-btn"
            >
              Update
            </button> */}
          </div>
        </div>
      </>
    </>
  );
};

export default TaskComponent;
