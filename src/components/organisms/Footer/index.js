import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './_footer.scss';

export default class Header extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const componentClass = classNames(this.props.className, 'footer');

		return (
			<footer className={componentClass}>
				<div className="footer__inner"></div>
			</footer>
		);
	}
}
