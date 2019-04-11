import React from 'react';
import PropTypes from 'prop-types';
import style from './_hamburger.scss';

export default class Header extends React.Component {
	static propTypes = {
		onClick: PropTypes.func,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<button type="button" className="hamburger" onClick={this.props.onClick}>
				<span className="hamburger__label">Menu</span>
			</button>
		);
	}
}
