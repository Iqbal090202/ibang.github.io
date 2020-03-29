
// Add smooth scrolling to all links
$(".scroll").on('click', function (event) {
	// Make sure this.hash has a value before overriding default behavior
	if (this.hash !== "") {
		// Prevent default anchor click behavior
		event.preventDefault();
		// Store hash
		let hash = this.hash;
		// Using jQuery's animate() method to add smooth page scroll
		// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		$('html, body').animate({
			scrollTop: $(hash).offset().top - 50
		}, 1000, 'easeOutSine')
	} // End if
});


// parallax

$(window).on('load', function () {
	$('.pKiri').animate({
		left: '0',
		opacity: 1
	}, 1500)
	$('.pKanan').animate({
		right: '0',
		opacity: 1
	}, 1500)
});

$(window).scroll(function () {
	var wScroll = $(this).scrollTop();

	// jumbotron
	$('.jumbotron img').css({
		'transform': 'translate(0px, ' + wScroll / 4.5 + '%)'
	});

	$('.jumbotron h1').css({
		'transform': 'translate(0px, ' + wScroll / 2 + '%)'
	});

	$('.jumbotron p').css({
		'transform': 'translate(0px, ' + wScroll / 1.5 + '%)'
	});

	// portfolio
	if (wScroll > $('.portfolio').offset().top - 100) {

		$('.portfolio .thumbnail').each(function (i) {
			setTimeout(function () {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * i);
		});
	}

	//contact
	if (wScroll > $('.contact').offset().top - 200) {
		$('#form').fadeIn(2000);
	}

});





















