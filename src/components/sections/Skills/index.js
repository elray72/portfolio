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
								<Card
									title="JavaScript"
									logo="/src/components/sections/Skills/img/js.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title="React"
									logo="/src/components/sections/Skills/img/react.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title="WebPack"
									logo="/src/components/sections/Skills/img/webpack.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title=".NET / C#"
									logo="/src/components/sections/Skills/img/csharp.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title="Angular"
									logo="/src/components/sections/Skills/img/angular.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title="VueJs"
									logo="/src/components/sections/Skills/img/vue.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title="TypeScript"
									logo="/src/components/sections/Skills/img/ts.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title="HTML"
									logo="/src/components/sections/Skills/img/html5.png">
								</Card>
							</Slide>
							<Slide>
								<Card
									title="SCSS"
									logo="/src/components/pages/Skills/img/sass.png">
								</Card>
							</Slide>
						</Swiper>
					</div>
				</div>
			</div>
		);
	}
}
