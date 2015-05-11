$(function() {
	$('.profile').on('click', function(e) { 
		e.stopPropagation(); 
	});
	
	$('.profile-btn').on('click', function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.profile-nav').fadeOut(100);
		}

		else {
			$('.profile-nav').fadeIn(100);
			$(this).addClass('active');
		}
	});

	$('.icon-search').on('click', function(e) { 
		e.stopPropagation();
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.search').removeClass('show');
		}

		else {
			$(this).addClass('active');
			$('.search')
				.addClass('show')
				.children('input')
				.focus();
		}
	});

	$('.search').on('click', function(e) { 
		e.stopPropagation(); 
	});

	$('body').on('click', function(e) {
		$('.search').removeClass('show');
		$('.icon-search').removeClass('active');
		$('.profile-btn').removeClass('active');
		$('.profile-nav').fadeOut(100);
	});
});