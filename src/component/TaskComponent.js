import { useContext, useEffect, useState } from "react";
import { DeleteList, UpdateList } from "../response/RestApi";
import { addButton, addTask, addedTask } from "../App";
import EditComponent from "./EditComponent";

const TaskComponent = ({ list }) => {
  const { addtask, setaddTask } = useContext(addedTask);
  const { id } = list;
  const { task } = list;
  const { status } = list;

  return (
    <>
      <>
        <div className="input-group mb-3">
          <input
            onChange={(e) => setaddTask(e.target.value)}
            value={task}
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
            <EditComponent list={list} />
            <button
              onClick={() => UpdateList(id, addtask, status)}
              className="btn btn-success btn-sm edit-btn"
            >
              Complete
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export default TaskComponent;
