$(function() {
	$('.nav-item.nav-link').click(function(event) {
		event.preventDefault();
		let goTo = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(goTo).offset().top
		}, 1000);
  });

  $('#scroller a').click(function(event) {
		event.preventDefault();
		let goTo = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(goTo).offset().top
		}, 1000);
	});

	$('#totop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 1000);
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#totop').fadeIn('slow');
		} else {
			$('#totop').fadeOut('slow');
		}
  });

  // Copyrights year fill
  $(window).ready(function() {
    let year = new Date().getFullYear();
    let start = $('#start-year').html();
    if (parseInt(year) > parseInt(start))
      $('#this-year').html(` - ${year}`);
    return;
  });

});