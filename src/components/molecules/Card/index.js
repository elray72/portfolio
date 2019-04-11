import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './_card.scss';

export default class SkillCard extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const componentClass = classNames(this.props.className, 'card');

		return (
			<div className={componentClass}>
				<div className="card__inner">
					<div className="card__header"></div>
					Card
				</div>
			</div>
		);
	}
}
