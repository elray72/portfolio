/** ====================================================================================================================
 // Store - with dynamic reducers
 // ================================================================================================================= */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers/index';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable */
export default function configureStore(initialState = {}, history) {

	// Create  store with two middleware
	// 1. sagaMiddleware: Makes redux-sagas work
	// 2. routerMiddleware: Syncs the location/url path to the state
	const middleware = [
		sagaMiddleware,
		routerMiddleware(history),
	];

	const enhancers = [
		applyMiddleware(...middleware),
	];

	const composeEnhancers =
		process.env.NODE_ENV !== 'production' &&
		typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				shouldHotReload: false,
			})
			: compose;

	const store = createStore(
		createReducer(),
		fromJS(initialState),
		composeEnhancers(...enhancers)
	);

	// Extensions
	store.runSaga = sagaMiddleware.run;
	store.injectedReducers = {}; // Reducer registry
	store.injectedSagas = {}; // Saga registry

	// Make reducers hot reloadable, see http://mxs.is/googmo
	/* istanbul ignore next */
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			store.replaceReducer(createReducer(store.injectedReducers));
		});
	}

	return store;
}
