import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_tile.scss';

const Tile = (props) => {
	const colourClass = `tile--${props.tags}`;
	const componentClass = classNames(props.className, 'tile', colourClass);

	return (
		<div className={componentClass}>
			<h2>{props.tags}</h2>
		</div>
	);
};

Tile.propTypes = {
	className: PropTypes.string,
	tags: PropTypes.string,
};

export default Tile;
