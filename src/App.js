import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { asyncInc, normalInc, selectCounter } from './features/counterSlice';

function App() {
	const counter = useSelector(selectCounter);
	const dispatch = useDispatch();

	const handleNormalInc = () => {
		dispatch(normalInc());
	};
	const handleAsyncInc = () => {
		dispatch(asyncIncAct());
	};

	const asyncIncAct = () => {
		return (dispatch) => {
			// Assuming this set timeout is the async call which takes some time to return a value
			setTimeout(() => {
				dispatch(asyncInc());
			}, 1000);
		};
	};

	return (
		<div className="App">
			<p>{counter}</p>
			<button onClick={handleNormalInc}>normal increment (+1)</button>
			<button onClick={handleAsyncInc}>async increment (+2)</button>
		</div>
	);
}

export default App;
