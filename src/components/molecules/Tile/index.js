import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './_tile.scss';

export default class Tile extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		tags: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const colourClass = `tile--${this.props.tags}`;
		const componentClass = classNames(this.props.className, 'tile', colourClass);

		return (
			<div className={componentClass}>
				<h2>{this.props.tags}</h2>
			</div>
		);
	}
}
