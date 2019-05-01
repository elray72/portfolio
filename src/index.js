/** ====================================================================================================================
 // App
 // ================================================================================================================= */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import App from './app';
import configureStore from './store';

const initialState = {};
const history = createBrowserHistory();
const store = configureStore(initialState, history);
const appNode = document.getElementById('app');

const render = () => {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</Provider>,
		appNode,
	);
};
render();
