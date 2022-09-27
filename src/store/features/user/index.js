import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";

const initialState = {
  name: "exampleName",
  score: "",
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    registerScore: (state, action) => {
      return produce(state, (draft) => {
        draft.score = action.payload;
      });
    },
  },
});

export const { registerScore } = userSlice.actions;

export default userSlice.reducer;
