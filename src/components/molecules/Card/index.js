import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_card.scss';

const Card = (props) => {
	const componentClass = classNames(props.className, 'card');

	return (
		<div className={componentClass}>
			<div className="card__inner">
				<div className="card__header">
					<h3 className="card__heading">{props.title}</h3>
					<div className="card__logo">
						<img src={props.logo} alt={props.title} />
					</div>
				</div>
				<div className="card__body">{props.children}</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	title: PropTypes.string,
	logo: PropTypes.string,
};

export default Card;
