import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './_filter-option.scss';

export default class Filter extends React.Component {
	static propTypes = {
		className: PropTypes.string,
		name: PropTypes.string,
		text: PropTypes.string,
		value: PropTypes.string,
		onClick: PropTypes.func,
	};

	shouldComponentUpdate() {
		return false;
	}

	render() {
		const componentClass = classNames(this.props.className, 'filterOption');
		const filterText = this.props.text ? this.props.text : this.props.value;

		return (
			<li className={componentClass}>
				<label className="filterOption__label" htmlFor="ss">
					<input
						id="ss"
						type="radio"
						className="filterOption__radio"
						name={this.props.name}
						value={this.props.value}
						onClick={this.props.onClick}
					/>
					<span className="filterOption__button">{filterText}</span>
				</label>
			</li>
		);
	}
}
