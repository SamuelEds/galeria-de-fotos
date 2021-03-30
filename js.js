$('.carousel-img').owlCarousel({
	items: 3,
	loop: true,
	center: true,
	mouseDrag: true,
	dots: false,
	nav: true,
	autoplay: true,
	autoplayTimeout: 5000,
});

$('.owl_footer_secao-03').slick({
	dots: false,
	infinite: true,
	speed: 500,
	autoplay: true,
	autoSpeed: 500,
	slidesToShow: 4,
	slidesToScroll: 4,
});