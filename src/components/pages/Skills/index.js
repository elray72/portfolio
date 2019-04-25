import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactIdSwiper from 'react-id-swiper';
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
		const options = {};

		return (
			<div className={componentClass}>
				<div className="skills__inner">
					<div className="skills__header">
						<h2 className="skills__heading">What I do</h2>
						<p className="skills__text">
							I specialise in UI, Interaction development using React, Vue or Vanilla JavaScript.<br />
							Supporting this NodeJs, ASP.NET, SQL Server & MongoDb.
						</p>
					</div>
					<div className="skills__body">
						<div className="skills__swiper swiper" {...options}>
							<ReactIdSwiper>
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
							</ReactIdSwiper>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
