import { useState } from "react";
import ViewComponent from "./ViewComponent";
import { UpdateList } from "../response/RestApi";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const EditComponent = ({ list }) => {
  const [addtask, setaddTask] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log(list.id, addtask, list.status);
    UpdateList(list.id, addtask, list.status);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
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
            defaultValue={list.task}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditComponent;
