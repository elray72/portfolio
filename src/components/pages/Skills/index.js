import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiper.config';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_skills.scss';

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
		const componentClass = classNames(this.props.className, 'skills');

		return (
			<div className={componentClass}>
				<div className="skills__inner">
					<div className="skills__header">
						<h2 className="skills__heading">What I do</h2>
						<p className="skills__text">
							I specialise in UI & Interaction development using React, Vue or Vanilla
							over MERN or ASP.NET backends.
						</p>
					</div>
					<div className="skills__body">
						<Swiper {...swiperConfig}>
							<Slide>
								s1
								<Card
									type="skill"
									title="Slide 1"
								/>
							</Slide>
							<Slide>
								s2
								<Card
									type="skill"
									title="Slide 2"
								/>
							</Slide>
							<Slide>
								s3
								<Card
									type="skill"
									title="Slide 3"
								/>
							</Slide>
						</Swiper>
					</div>
				</div>
			</div>
		);
	}
}
