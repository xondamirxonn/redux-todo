import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../storage";

const initialState = loadState("todo") || {
  task: [],
};

const todoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    add: (state, action) => {
      return { ...state, task: [...state.task, action.payload] };
    },
    deleteTask: (state, action) => {
      return {
        ...state,
        task: state.task.filter((obj) => obj.id !== action.payload.id),
      };
    },
  },
});

export default todoReducer.reducer;

export const { add, deleteTask } = todoReducer.actions;
