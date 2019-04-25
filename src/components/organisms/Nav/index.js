import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './_nav.scss';

export default class Header extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const componentClass = classNames(this.props.className, 'nav');

		return (
			<nav className={componentClass}>
				<ul className="nav__list">
					<li className="nav__item">
						<Link to="/home" className="nav__link">Home</Link>
					</li>
					<li className="nav__item">
						<Link to="/test" className="nav__link">Test</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
