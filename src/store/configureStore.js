import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import { fromJS } from 'immutable';
import rootReducer from './reducers/index';

const configureStore = (initialState = {}, history) => {
	// Sagas
	const sagaMiddleware = createSagaMiddleware();

	// Middleware
	const middleware = [sagaMiddleware, routerMiddleware(history), loggerMiddleware];

	// Enhancers
	const enhancers = [applyMiddleware(...middleware)];

	// Compose
	/* eslint-disable */
	const composeEnhancers =
		process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false })
			: compose;

	// Create store
	const store = createStore(rootReducer(), fromJS(initialState), composeEnhancers(...enhancers));

	// Extensions
	store.runSaga = sagaMiddleware.run;
	store.injectedReducers = {}; // Reducer registry
	store.injectedSagas = {}; // Saga registry

	// Enable hot reload
	if (module.hot) {
		module.hot.accept('./reducers', () => {
			store.replaceReducer(rootReducer(store.injectedReducers));
		});
	}

	return store;
};

export default configureStore;
