import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactIdSwiper from 'react-id-swiper';
import swiperStyle from 'react-id-swiper/src/styles/scss/swiper.scss';
import style from './_swiper.scss';

import Slide from '../../molecules/Slide';
import Card from '../../molecules/Card';

export default class Carousel extends React.Component {
	static propTypes = {
		className: PropTypes.string,
	};

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		const componentClass = classNames(this.props.className, 'swiper');
		const options = {};

		return (
			<div className={componentClass} {...options}>
				<ReactIdSwiper>
					<Slide>
						<Card
							type="skill"
							title="Slide 1"
						/>
					</Slide>
					<Slide>
						<Card
							type="skill"
							title="Slide 2"
						/>
					</Slide>
					<Slide>
						<Card
							type="skill"
							title="Slide 3"
						/>
					</Slide>
				</ReactIdSwiper>
			</div>
		);
	}
}
