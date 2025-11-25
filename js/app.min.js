const advCard = document.querySelectorAll('.advantages-card');

advCard.forEach((el) => {
	let innerText = el.getElementsByClassName('advantages-card__text')[0];
	// console.log('innerTest', innerText[0].textContent)
	function changeText() {
		switch (true) {
			case el.classList.contains('adv-card-1'):
				el.classList.toggle('reorder');
				if (el.classList.contains('reorder')) {
					innerText.textContent = 'Lorem, ipsum dolor sit amet consectetur';
				} else {
					innerText.textContent = 'Animi aperiam velit ratione eos eveniet';
				}
				break;
			case el.classList.contains('adv-card-2'):
				el.classList.toggle('reorder');
				if (el.classList.contains('reorder')) {
					innerText.textContent = 'Animi aperiam velit ratione eos eveniet earum officia rem';
				} else {
					innerText.textContent = 'Amet consectetur adipisicing elit';
				}
				break;
			case el.classList.contains('adv-card-3'):
				el.classList.toggle('reorder');
				if (el.classList.contains('reorder')) {
					innerText.textContent = 'Animi aperiam velit ratione eos eveniet';
				} else {
					innerText.textContent = 'Velit eum incidunt ex sequi distinctio';
				}
				break;
			case el.classList.contains('adv-card-4'):
				el.classList.toggle('reorder');
				if (el.classList.contains('reorder')) {
					innerText.textContent = 'Animi aperiam velit ratione eos eveniet';
				} else {
					innerText.textContent = 'Animi aperiam velit ratione eos eveniet';
				}
				break;
			case el.classList.contains('adv-card-5'):
				el.classList.toggle('reorder');
				if (el.classList.contains('reorder')) {
					innerText.textContent = 'Animi aperiam velit ratione eos eveniet';
				} else {
					innerText.textContent = 'Animi aperiam velit ratione eos eveniet';
				}
				break;
		}
	}
	if ($(window).width() > 620) {
		$(el).hover(changeText);
	} else {
		$(el).on('click', changeText);
	}
});

$('.burger, .overlay').click(function () {
	$('.burger').toggleClass('show');
	$('.overlay').toggleClass('show');
	$('nav').toggleClass('show');
});

document.querySelectorAll('collapsed').forEach((el) => {
	el.addEventListener('click', () => {
		console.log(el, 'clickied');
	});
});

const swiperNews = new Swiper('.swiper-news', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	cssMode: true,
	// Pagination
	pagination: {
		el: '.swiper-news .swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 3000,
	},
});

const swiperEvent = new Swiper('.swiper-event', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 200,
	},
	// cssMode: true,
	slidesPerView: 3,
	spaceBetween: 18,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	// watchOverflow: true,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 1,
			spaceBetween: 0,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
			spaceBetween: 18,
		},
	},
});

const sortBtn = document.querySelector('#sort-btn');
if (sortBtn) {
	sortBtn.addEventListener('click', function () {
		let sortIcon = document.querySelector('#sort-btn .bi');
		sortIcon.classList.toggle('bi-sort-numeric-down-alt');
		sortIcon.classList.toggle('bi-sort-numeric-up-alt');
	});
}

const swiperNewsContent = new Swiper('.swiper-news-content', {
	// Optional parameters
	direction: 'horizontal',
	// loop: true,
	cssMode: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	watchOverflow: true,
});

const swiperMarqueee = new Swiper('.swiper-marquee', {
	// Optional parameters
	direction: 'horizontal',
	// loop: true,
	// cssMode: true,
	slidesPerView: 7,
	// Navigation arrows
	// watchOverflow: true,
	speed: 1500,
	autoplay: {
		delay: 0,
		pauseOnMouseEnter: true,
	},
	loop: true,
	breakpoints: {
		// when window width is >= 320px
		300: {
			slidesPerView: 2,
		},
		320: {
			slidesPerView: 2,
		},
		// when window width is >= 480px
		480: {
			slidesPerView: 2,
		},
		// when window width is >= 640px
		640: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 5,
		},
		1200: {
			slidesPerView: 6,
		},
	},
});

// $('.swiper-marquee').on('mouseenter', function(e){
//      swiperMarqueee.stopAutoplay();
// })
// $('.swiper-marqueer').on('mouseleave', function(e){
//      swiperMarqueee.startAutoplay();
// })

let phoneMask = IMask(document.getElementById('tel'), {
	mask: '+{375}(00)000 00 00',
});

let emailSend = $('.banner-email__input-error input');
if (emailSend) {
	emailSend.attr('placeholder', 'Incorrectly');
}
