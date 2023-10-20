document.addEventListener("DOMContentLoaded", onInit);

const nodes = {
	banner: null,
	burger: null,
	nav: null
};

function onInit() {
	initDomNodes();
	initListenerForSmoothScrolling();
	initScrollListenerForParallaxEffect();
	initListenerForAnimBurgerAndNav();
}

function initDomNodes() {
	nodes.banner = document.querySelector('.banner');
	nodes.burger = document.querySelector('.header__burger');
	nodes.nav = document.querySelector('.header-mobile__nav');
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


	window.addEventListener('scroll', () => {
		const yOffset = window.scrollY;
		const backgroundOffset = yOffset * parallaxSpeed;

		nodes.banner.style.backgroundPositionY = backgroundOffset + 'px';

		if (window.scrollY > 100) onCloseNav();
	});
}


function initListenerForAnimBurgerAndNav() {
	nodes.burger.addEventListener('click', () => onToggleNav())
}

function onToggleNav() {
	nodes.burger.classList.toggle('header__burger-open');
	nodes.nav.classList.toggle('header-mobile__nav_open');
}

function onCloseNav() {
	if (!nodes.burger.classList.contains('header__burger-open')) return;

	nodes.burger.classList.remove('header__burger-open');
	nodes.nav.classList.remove('header-mobile__nav_open');
}