import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

// Reducers
import app from './app';

// Initial routing state
const initialState = fromJS({
	section: null,
});

// Route reducer
/* eslint-disable */
function route(state = initialState, action) {
	switch (action.type) {
		case LOCATION_CHANGE:
			return state.merge({
				section: action.payload,
			});
		default:
			return state;
	}
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
	return combineReducers({
		route,
		app,
		...injectedReducers,
	});
}
