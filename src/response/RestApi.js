import axios from "axios";

// const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
export const TodoList = async (limit = "todo") => {
  const { data } = await axios.get(`/api/todo`);
  return data;
};
export const PostList = async (myTask = "") => {
  const { data } = await axios.post(`/api/todo`, {
    task: myTask,
  });
  return data;
};

export const DeleteList = async (myId = "") => {
  const { data } = await axios.delete(`/api/todo/${myId}`, {
    id: myId,
  });
  return data;
};

export const UpdateList = async (myId = "", addTask = "", myStatus = "") => {
  const { data } = await axios.patch(`/api/todo/${myId}`, {
    id: myId,
    task: addTask,
    status: myStatus,
  });
  return data;
};

export const getTodourl = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
