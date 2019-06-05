/** ====================================================================================================================
 // Page: Dashboard
 // ================================================================================================================= */

import React from 'react';
import { Helmet } from 'react-helmet';
import Swiper from 'react-id-swiper';
import swiperConfig from './swiper.config';
import 'react-id-swiper/src/styles/scss/swiper.scss';
import './_home.scss';

// Components
import Slide from '../../molecules/Slide';
import Hero from '../../sections/Hero';
import Work from '../../sections/Work';
import Skills from '../../sections/Skills';

export default class Home extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	render() {
		return (
			<div className="home">
				<Helmet>
					<title>Home</title>
					<meta name="description" content="Feature page of React.js Boilerplate application" />
				</Helmet>
				<Swiper {...swiperConfig}>
					<Slide slideType="section" slideTheme="navy">
						<Hero />
					</Slide>
					<Slide slideType="section">
						<Work />
					</Slide>
					<Slide slideType="section">
						<Skills />
					</Slide>
					<Slide slideType="section" />
					<Slide slideType="section" />
				</Swiper>
			</div>
		);
	}
}
