const prefix = 'home';

module.exports = {
	direction: 'vertical',
	centeredSlides: true,
	containerModifierClass: `${prefix}__swiper--`,
	containerClass: `${prefix}__swiper`,
	wrapperClass: `${prefix}__swiper-wrapper`,
	slideClass: `${prefix}__section`,
	slideActiveClass: `${prefix}__section--active`,
	slideNextClass: `${prefix}__section--next`,
	pagination: {
		el: `.${prefix}__pagination`,
		clickable: true,
		bulletClass: `${prefix}__bullet`,
		bulletActiveClass: `${prefix}__bullet--active`,
		modifierClass: `${prefix}__pagination--`,
		clickableClass: `${prefix}__pagination--clickable`,
	},
	a11y: {
		enabled: false,
	},
	mousewheel: true,
};
