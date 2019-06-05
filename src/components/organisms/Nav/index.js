import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './_nav.scss';

const Nav = (props) => {
	const componentClass = classNames(props.className, 'nav');

	return (
		<nav className={componentClass}>
			<ul className="nav__list">
				<li className="nav__item">
					<Link to="/home" className="nav__link">
						Home
					</Link>
				</li>
				<li className="nav__item">
					<Link to="/test" className="nav__link">
						Test
					</Link>
				</li>
			</ul>
		</nav>
	);
};

Nav.propTypes = {
	className: PropTypes.string,
};

export default Nav;
