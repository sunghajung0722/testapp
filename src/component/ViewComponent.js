import { useContext, useEffect, useState } from "react";
import { addedTask } from "../App";
import { TodoList, UpdateList } from "../response/RestApi";

const ViewComponent = ({ list }) => {
  const { addtask, setaddTask } = useContext(addedTask);

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Edit Task
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input
              onChange={(e) => setaddTask(e.target.value)}
              defaultValue={list.task}
              style={
                list.status === "complete"
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
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              //   onClick={() => UpdateList(list.id, addtask, "complete")}
              className="btn btn-warning"
              data-bs-dismiss="modal"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewComponent;
