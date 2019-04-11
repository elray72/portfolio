import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './_hero.scss';

export default class Swiper extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const componentClass = classNames(this.props.className, 'hero');

		return (
			<div className={componentClass}>
			</div>
		);
	}
}
