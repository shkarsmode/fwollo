document.addEventListener("DOMContentLoaded", onInit);

function onInit() {
	initListenerForSmoothScrolling();
	initScrollListenerForParallaxEffect();
	initListenerForAnimBurgerAndNav();
}

function initListenerForSmoothScrolling() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', e => {
			e.preventDefault();

			document.querySelector(anchor.getAttribute('href'))
				.scrollIntoView({
					behavior: 'smooth'
				});
		});
	});
}

function initScrollListenerForParallaxEffect() {
	const parallaxSpeed = 0.2;

	const banner = document.querySelector('.banner');

	window.addEventListener('scroll', function () {
		const yOffset = window.scrollY;
		const backgroundOffset = yOffset * parallaxSpeed;

		banner.style.backgroundPositionY = backgroundOffset + 'px';
	});
}

function initListenerForAnimBurgerAndNav() {
	const burger = document.querySelector('.header__burger');
	const nav = document.querySelector('.header-mobile__nav');

	burger.addEventListener('click', () => {
		burger.classList.toggle('header__burger-open');
		nav.classList.toggle('header-mobile__nav_open');
	})
}