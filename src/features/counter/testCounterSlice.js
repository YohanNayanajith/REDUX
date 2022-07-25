import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  count: 0,
};

export const testCounterSlice = createSlice({
  name: "testCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = testCounterSlice.actions;

export default testCounterSlice.reducer;
