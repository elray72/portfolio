import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_contact.scss';

export default class Contact extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const componentClass = classNames(this.props.className, 'contact');

		return <div className={componentClass} />;
	}
}
