/** ====================================================================================================================
 // View: Test
 // ================================================================================================================= */
import React from 'react';
import { Helmet } from 'react-helmet';

export default class Test extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<section>
				<Helmet>
					<title>Test</title>
					<meta name="description" content="Feature page of React.js Boilerplate application" />
				</Helmet>
				<h1>Test</h1>
			</section>
		);
	}
}
