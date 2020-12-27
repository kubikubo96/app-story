import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: "",
  },
  reducers: {
    setCounter: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { setCounter } = counterSlice.actions;
export const selectCounter = (state: any) => state.counter.value;
export default counterSlice.reducer
