import { useContext, useEffect, useState } from "react";
import { addTask } from "../App";
import { addButton } from "../App";
import { PostList } from "../response/RestApi";

const ButtonComponent = () => {
  const { getButton, setButton } = useContext(addButton);
  const { task, setTask } = useContext(addTask);


  return (
    <button onClick={() => PostList(task)} class="btn btn-secondary">
      Add
    </button>
  );
};

export default ButtonComponent;
