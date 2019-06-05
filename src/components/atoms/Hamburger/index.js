import React from 'react';
import PropTypes from 'prop-types';
import './_hamburger.scss';

const Hamburger = (props) => (
	<button type="button" className="hamburger" onClick={props.onClick}>
		<span className="hamburger__label">Menu</span>
	</button>
);

Hamburger.propTypes = {
	onClick: PropTypes.func,
};

export default Hamburger;
