import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

const exampleSlice = createSlice({
  name: 'exampleSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

export default exampleSlice.reducer;
