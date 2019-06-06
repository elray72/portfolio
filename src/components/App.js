/** ====================================================================================================================
 // App
 // ================================================================================================================= */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import 'sanitize.css';
import '../themes/v1/scss/style.scss';

// Router
import Home from './pages/Home/index';
import Test from './pages/Test/index';

// Components
import Header from './organisms/Header/index';
// import SearchIcon from './atoms/Icons/SearchIcon';

const App = () => (
	<React.Fragment>
		<Helmet titleTemplate="Ray Ranola - %s" defaultTitle="Ray Ranola - Full Stack Developer">
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
	</React.Fragment>
);

export default hot(module)(App);
