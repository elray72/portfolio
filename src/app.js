/** ====================================================================================================================
 // App
 // ================================================================================================================= */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'sanitize.css/sanitize.css';
import styles from './themes/default/scss/style.scss';

// Router
import Home from './components/pages/Home/index';
import Test from './components/pages/Test/index';

// Components
import Header from './components/organisms/Header/index';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="page">
				<Helmet titleTemplate="React - %s" defaultTitle="React - Styleguide">
					<meta name="description" content="" />
				</Helmet>
				<Header />
				<main className="main">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/home" component={Home} />
						<Route exact path="/test" component={Test} />
					</Switch>
				</main>
			</div>
		);
	}
}

export default hot(module)(App);
