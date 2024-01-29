import { createSlice } from "@reduxjs/toolkit";
import { initState } from "../utils/initialState.jsx";

const initialState = {
  value: initState(),
};

export const boardSlice = createSlice({
  name: "board",

  initialState,
  reducers: {
    addBoardToStore: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addBoardToStore } = boardSlice.actions;
export default boardSlice.reducer;
