import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_slide.scss';

const Slide = (props) => {
	const ComponentType = props.slideType || 'div';
	const componentClass = classNames(props.className, 'slide');

	return (
		<ComponentType className={componentClass}>
			{props.children}
		</ComponentType>
	);
};

Slide.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	slideType: PropTypes.string,
};

export default Slide;
