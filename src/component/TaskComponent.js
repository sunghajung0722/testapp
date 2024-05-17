import { useContext, useEffect } from "react";
import { DeleteList, UpdateList } from "../response/RestApi";
import { addButton, addTask } from "../App";

const TaskComponent = ({ list }) => {
  const { _task, setTask } = useContext(addTask);
  const { id } = list;
  const { task } = list;
  const { status } = list;

  return (
    <>
      <>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setTask(e.target.value)}
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
              onClick={() => UpdateList(id)}
              className="btn btn-success btn-sm edit-btn"
            >
              Complete
            </button>
            <button
              onClick={() => UpdateList(id, _task, status)}
              className="btn btn-warning btn-sm edit-btn"
            >
              Update
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default TaskComponent;