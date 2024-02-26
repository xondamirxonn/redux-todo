import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../storage";

const initialState = {
  count: 0
}

const counterReducer =  createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      return {...state, count: state.count + 1}
    },
    decrement: (state, action) => {
      return { ...state, count: state.count - 1 };

    }
  }
})

export default counterReducer.reducer

export const {increment, decrement} =  counterReducer.actions