import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InlineSVG from 'svg-inline-react';
import './_icon.scss';

// Icons
import searchIcon from './img/search.svg';

const Icon = (props) => {
	const componentClass = classNames('icon', props.className);
	let icon = null;
	switch (props.icon) {
		case 'Search':
			icon = <InlineSVG src={searchIcon} title={props.title} />;
			break;
		default:
			break;
	}

	return (
		<div className={componentClass} role="navigation" aria-label={props.title}>
			{icon}
		</div>
	);
};

Icon.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string,
	title: PropTypes.string,
};

export default Icon;
