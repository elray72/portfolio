import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_form.scss';

export default class Form extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const componentClass = classNames(this.props.className, 'form');
		return <div className={componentClass} />;
	}
}
