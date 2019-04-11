import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './_slide.scss';

export default class Slide extends React.Component {
	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		slideType: PropTypes.string,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const ComponentType = this.props.slideType || 'div';
		const componentClass = classNames(this.props.className, 'swiper');

		return (
			<ComponentType className={componentClass}>
				{this.props.children}
			</ComponentType>
		);
	}
}
