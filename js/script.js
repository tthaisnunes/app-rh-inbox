$( document ).ready(function() {
	//open menu
	$('.icon-menu').click(function() {
		$('.menu').addClass('active');
		$('body').css('overflow','hidden');
	});

	//close menu when click outside
	$(document).mouseup(function(e) 
	{
		var container = $(".menu");
		if (!container.is(e.target) && container.has(e.target).length === 0) 
		{
			$('.menu').removeClass('active');
		}
	});
	
	//toggle menu with swipe
	$(window).on("swiperight",function(e){	
		$('.menu').addClass('active');
	});
	$(window).on("swipeleft",function(e){	
		$('.menu').removeClass('active');
	});


});
