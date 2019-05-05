import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_card.scss';

export default class SkillCard extends React.Component {
	static propTypes = {
		children: PropTypes.node,
		className: PropTypes.string,
		title: PropTypes.string,
		logo: PropTypes.string,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const componentClass = classNames(this.props.className, 'card');

		return (
			<div className={componentClass}>
				<div className="card__inner">
					<div className="card__header">
						<h3 className="card__heading">{this.props.title}</h3>
						<div className="card__logo">
							<img src={this.props.logo} alt={this.props.title} />
						</div>
					</div>
					<div className="card__body">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
