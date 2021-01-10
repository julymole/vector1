//@@include('alert.js')
@@include('slick.js');
$(document).ready(function (event) {

	$('body').on('click', '.burger', function (event) {
		event.preventDefault();
		$('.burger, .header__wrap').stop();
		$('.burger, .header__wrap').toggleClass('active');
		//$('.header__menu-logo').slideToggle(2000);
	})

	$('.header__row-tel-hidden').hide();

	$('body').on('mouseenter', '.header__row-tel-wrap', function (event) {
		$('.header__row-tel-hidden').stop();
		$('.header__row-tel-hidden').slideDown(1000);
	})
	$('body').on('mouseleave', '.header__row-tel-wrap', function (event) {
		$('.header__row-tel-hidden').stop();
		$('.header__row-tel-hidden').slideUp(1000);
	})

	$('body').on('click', '.header__row-tel-arrow', function (event) {
		$('.header__row-tel-hidden').slideToggle(1000);
	})

$('body').on('click', '.category-menu-btn-open', function (event) {
		$('.category-menu-wrap').toggleClass('active');
	})

	$('.customers-slider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 1000,
		easing: 'ease',
		infinite: false,
		responsive: [
			{
				breakpoint: 1390,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},{
				breakpoint: 850,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
		]
	});
	
	$('.category__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
	});
	
	$('.product__slider').slick({
		arrows: true,
		dots: true,
		slidesToShow: 1,
	});

});