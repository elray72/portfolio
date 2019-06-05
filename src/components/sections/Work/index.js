import React from 'react';
import PropTypes from 'prop-types';
import mixitup from 'mixitup';
import classNames from 'classnames';
import './_work.scss';

// Components
import Filter from '../../molecules/Filter';
import FilterOption from '../../molecules/FilterOption';
import Tile from '../../molecules/Tile';

export default class Grid extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {};
		this.mixer = {};

		// elements
		this.el = {
			shuffle: null,
		};

		// set refs
		this.setShufflerRef = (e) => {
			this.el.shuffle = e;
		};
	}

	componentDidMount() {
		console.log('componentDidMount');

		this.initShuffler();
	}

	initShuffler = () => {
		console.log(this.el.shuffle);

		this.mixer = mixitup('.grid__shuffle');
	};

	handleFilterClick = () => {
		console.log('handleFilterClick');
		this.mixer.filter('.mix--green');
	};

	render() {
		const componentClass = classNames(this.props.className, 'grid');

		return (
			<div className={componentClass}>
				<div className="grid__inner">
					<h1>Shuffler</h1>

					<Filter className="grid__filter">
						<button type="button" onClick={this.handleFilterClick}>
							Green
						</button>
						<FilterOption name="filter_option" text="Red" value="red" onClick={this.handleFilterClick} />
						<FilterOption name="filter_option" text="Green" value="green" />
						<FilterOption name="filter_option" text="Blue" value="blue" />
						<FilterOption name="filter_option" text="Yellow" value="yellow" />
					</Filter>

					<div className="grid__shuffle" ref={this.setShufflerRef}>
						<div className="grid__item mix">
							<Tile tags="red" />
						</div>
						<div className="grid__item mix mix--green">
							<Tile tags="green" />
						</div>
						<div className="grid__item mix">
							<Tile tags="blue" />
						</div>
						<div className="grid__item mix mix--green">
							<Tile tags="green" />
						</div>
						<div className="grid__item mix">
							<Tile tags="yellow" />
						</div>
						<div className="grid__item mix">
							<Tile tags="red" />
						</div>
						<div className="grid__item mix">
							<Tile tags="yellow" />
						</div>
						<div className="grid__item mix">
							<Tile tags="blue" />
						</div>
						<div className="grid__item mix">
							<Tile tags="blue" />
						</div>
						<div className="grid__item mix mix--green">
							<Tile tags="green" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
