import { createForms } from 'react-redux-form';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { SimulationInfo } from './forms';

export const ConfigureStore = () => {
	const store = createStore(
		combineReducers({
			...createForms({
				simulation: SimulationInfo
			})
		}),
		applyMiddleware(thunk, logger)
	);

	return store;
}