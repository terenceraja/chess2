import { createSlice } from "@reduxjs/toolkit";
import { initiate } from "../utils/initialState.jsx";

const initialState = {
  value: initiate(),
};

export const boardSlice = createSlice({
  name: "board",

  initialState,
  reducers: {
    updateBoard: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { updateBoard } = boardSlice.actions;
export default boardSlice.reducer;
