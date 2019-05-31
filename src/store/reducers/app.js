import { fromJS } from 'immutable';

const initialState = fromJS({
	loading: false,
	error: false,
	currentSection: 'home',
});

/* eslint-disable */
function app(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}

export default app;
