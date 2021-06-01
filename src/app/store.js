import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from '../features/counterSlice';

export const store = configureStore(
	{
		reducer: {
			counter: counterReducer,
		},
	},
	applyMiddleware(thunk)
);
