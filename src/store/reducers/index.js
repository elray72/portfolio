import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

// Reducers
import appReducer from './appReducer';

// Initial routing state
const initialState = fromJS({
	section: null,
});

// Route reducer
/* eslint-disable */
function routeReducer(state = initialState, action) {
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
		routeReducer,
		appReducer,
		...injectedReducers,
	});
}
