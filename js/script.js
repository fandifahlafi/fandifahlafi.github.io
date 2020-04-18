$('.page-scroll').on('click', function (e){

	let href = $(this).attr('href');
	let hrefScroll = $(href);

	$('html, body').animate({
		scrollTop: hrefScroll.offset().top-100
	}, 1000)
e.preventDefault();
});



$(window).scroll(function() {

	let wScroll = $(this).scrollTop();
	$('.parallax .sinema-kadirian').css({
		'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
	});
	$('.parallax h2').css({
		'transform' : 'translate(0px, '+ wScroll/.6 +'%)'
	});
	$('.parallax p').css({
		'transform' : 'translate(0px, '+ wScroll/.4 +'%)'
	});
	$('.parallax .layer-1').css({
		'transform' : 'translate(0px, '+ wScroll/20 +'%)'
	});
	$('.parallax .layer-2').css({
		'transform' : 'translate(0px, '+ wScroll/25 +'%)'
	});
	$('.parallax .layer-3').css({
		'transform' : 'translate(0px, '+ wScroll/35 +'%)'
	});


	if(wScroll > $('.history').offset().top-250) {
		$('.history-title').addClass('load');
	};
	if(wScroll > $('.history').offset().top-50) {
		$('.content-left').addClass('load');
	};
	if(wScroll > $('.history').offset().top-50) {
		$('.content-right').addClass('load');
	}

	if(wScroll > $('.agenda').offset().top-300) {
		$('.agenda .poster-agenda').each(function(i) {
			setTimeout(function() {
				$('.agenda .poster-agenda').eq(i).addClass('load');
			}, 300 * i);
		});
	};

	if(wScroll > $('.about').offset().top-300) {
		$('.about p').addClass('load');
	};
	if(wScroll > $('.about').offset().top-300) {
		$('.about .ig-logo').addClass('load');
	};


});

function openLb() {
	let openLb = document.getElementById('lightbox');
	openLb.style.display = "block";
};

function closeLb() {
	let closeLb = document.getElementById('lightbox');
	closeLb.style.display = "none";
};
let slideIndex = 1;
showSlides(slideIndex);

function currentSlide (n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('lb-content');
	if (n > slides.length) {slideIndex = 1};
	if (n < 1) {slideIndex = slides.length};
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	};
	slides[slideIndex-1].style.display = "block";

};
function plusSlides(n) {
	showSlides(slideIndex += n);
};