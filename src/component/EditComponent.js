import { useState } from "react";
import ViewComponent from "./ViewComponent";
import { UpdateList } from "../response/RestApi";

const EditComponent = ({ setClick, task, status, list }) => {
  const [addtask, setaddTask] = useState("");
  const [getaddTask1, setaddTask1] = useState("");

  const StringVal = "#" + setClick;
  console.log(setClick);
  return (
    <>
      {/* <ViewComponent id={setClick} list={list} /> */}
      <div
        className="modal fade"
        id={setClick}
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
                defaultValue={task}
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
                onClick={() => UpdateList(setClick, "testbbb", "complete")}
                className="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditComponent;
