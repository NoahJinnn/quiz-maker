import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState = {
  value: 0,
} as CounterState;

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    actionIncrement: (state) => {
      state.value += 1;
    },
    actionDecrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    actionIncrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { actionIncrementByAmount, actionIncrement, actionDecrement } = counterSlice.actions;

export default counterSlice.reducer;
