import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducer/counter";
import todo from "./reducer/todo";
import { saveState } from "../storage";

export const store = configureStore({
  reducer:{
    counter,
    todo  
  },
})

store.subscribe(() => saveState("todo", store.getState().todo));

