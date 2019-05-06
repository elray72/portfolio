import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_filter-option.scss';

const FilterOption = (props) => {
	const componentClass = classNames(props.className, 'filterOption');
	const filterText = props.text ? props.text : props.value;

	return (
		<li className={componentClass}>
			<label className="filterOption__label" htmlFor="ss">
				<input
					id="ss"
					type="radio"
					className="filterOption__radio"
					name={props.name}
					value={props.value}
					onClick={props.onClick}
				/>
				<span className="filterOption__button">{filterText}</span>
			</label>
		</li>
	);
};

FilterOption.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string,
	text: PropTypes.string,
	value: PropTypes.string,
	onClick: PropTypes.func,
};

export default FilterOption;
