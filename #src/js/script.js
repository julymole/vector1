//@@include('alert.js')
$(document).ready(function (event) {
	
	$('body').on('click', '.burger', function (event) {
		event.preventDefault();
		$('.burger, .header__wrap').toggleClass('active');
		$('.header__menu-logo').slideToggle(2000);
	})
	
	$('.header__row-tel-hidden').hide();
	
	$('body').on('mouseenter', '.header__row-tel-wrap', function (event) {
		$('.header__row-tel-hidden').slideDown(1000);
	})
	$('body').on('mouseleave', '.header__row-tel-wrap', function (event) {
		$('.header__row-tel-hidden').slideUp(1000);
	})
	
	$('body').on('click', '.header__row-tel-arrow', function (event) {
		$('.header__row-tel-hidden').slideToggle(1000);
	})
});
