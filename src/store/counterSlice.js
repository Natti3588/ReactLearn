import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },

  // Reduxではimmerが裏でコピーを作成するため、直接操作をしても純粋関数が保たれる。
  reducers: {
    increment: (state) => {
      {
        state.count += 1;
      }
    },
    decrement: (state) => {
      {
        state.count -= 1;
      }
    },
    reset: (state) => {
      {
        state.count = 0;
      }
    },
    double: (state) => {
      {
        state.count *= 2;
      }
    },
  },
});

export const { increment, decrement, reset, double } = counterSlice.actions;
export default counterSlice.reducer;
