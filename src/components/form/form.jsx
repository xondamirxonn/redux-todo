import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/reducer/todo";
import { nanoid } from "@reduxjs/toolkit";

export const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    
    dispatch(add({taskName: input, id: nanoid()}))
    setInput("")
  };
  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
