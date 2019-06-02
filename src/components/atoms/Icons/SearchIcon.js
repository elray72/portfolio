import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InlineSVG from 'svg-inline-react';
import './_icon.scss';

// Icons
import searchIcon from './img/search.svg';

const Icon = (props) => {
	const componentClass = classNames('icon', props.className);
	return (
		<div className={componentClass} role="navigation" aria-label={props.title}>
			<InlineSVG src={searchIcon} />
		</div>
	);
};

Icon.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	fill: PropTypes.string,
};

export default Icon;
