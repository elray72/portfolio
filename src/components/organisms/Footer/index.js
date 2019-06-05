import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_footer.scss';

const Footer = (props) => {
	const componentClass = classNames(props.className, 'footer');

	return (
		<footer className={componentClass}>
			<div className="footer__inner" />
		</footer>
	);
};

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;
