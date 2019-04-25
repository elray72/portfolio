import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_hero.scss';

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
				<div className="hero__inner">
					<h1 className="hero__heading">Ray Ranola</h1>
					<p className="hero__text">
						Full stack developer at VMLY&R Sydney.<br />
					</p>
					<p className="hero__text"></p>
				</div>
			</div>
		);
	}
}
