document.addEventListener("DOMContentLoaded", onInit);

function onInit() {
	initListenerForSmoothScrolling();
	initScrollListenerForParallaxEffect();
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

