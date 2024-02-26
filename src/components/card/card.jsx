import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/reducer/todo";

export const Card = ({ taskName, id }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteTask({id}));
  };
  return (
    <div>
      <h2>{taskName}</h2>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};
