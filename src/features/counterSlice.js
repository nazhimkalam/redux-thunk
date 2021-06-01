import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		counter: 0,
	},
	reducers: {
		normalInc: (state) => {
			state.counter++;
		},
		asyncInc: (state) => {
			state.counter = state.counter + 2;
		},
	},
});

export const { normalInc, asyncInc } = counterSlice.actions;

// Selectors, which allows us to pull information to various components
export const selectCounter = (state) => state.counter.counter;

export default counterSlice.reducer;
