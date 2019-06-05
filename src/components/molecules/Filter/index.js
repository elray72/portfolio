import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_filter.scss';

export default class Filter extends React.Component {
	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const componentClass = classNames(this.props.className, 'filter');
		return <ul className={componentClass}>{this.props.children}</ul>;
	}
}
