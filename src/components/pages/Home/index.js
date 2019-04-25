/** ====================================================================================================================
 // Page: Dashboard
 // ================================================================================================================= */

import React from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_home.scss';

// Components
import Slide from '../../molecules/Slide';
import Hero from '../../organisms/Hero';
import Grid from '../../organisms/Grid';
import Slider from '../../organisms/Swiper';

export default class Home extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		const swiperConfig = {
			direction: 'vertical',
			centeredSlides: true,
			containerModifierClass: 'home__swiper--',
			containerClass: 'home__swiper',
			wrapperClass: 'home__swiper-wrapper',
			slideClass: 'home__section',
			slideActiveClass: 'home__section--active',
			slideNextClass: 'home__section--next',
			pagination: {
				el: '.home__pagination',
				clickable: true,
				bulletClass: 'home__bullet',
				bulletActiveClass: 'home__bullet--active',
				modifierClass: 'home__pagination--',
				clickableClass: 'home__pagination--clickable',
			},
			a11y: {
				enabled: false,
			},
			mousewheel: true,
		};

		return (
			<div className="home">
				<Helmet>
					<title>Home</title>
					<meta
						name="description"
						content="Feature page of React.js Boilerplate application"
					/>
				</Helmet>
				<Swiper {...swiperConfig}>
					<Slide slideType="section">
						<Hero />
					</Slide>
					<Slide slideType="section">
						<Slider />
					</Slide>
					<Slide slideType="section">
						<Grid>

						</Grid>
					</Slide>
					<Slide slideType="section">
					</Slide>
					<Slide slideType="section">
					</Slide>
				</Swiper>
			</div>
		);
	}
}
