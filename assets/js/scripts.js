$(document).ready(function(){
	// Mobile Menu
	$(document).ready(function () {
		$('.bars_icon').click(function (e) {
			e.preventDefault();  
	 
			$('.bars_menu').slideToggle(1000);
			
			if (!$(this).hasClass('fixed_bars')) {
				$(this).addClass('fixed_bars');
			}
	 
			const icon = $(this).find('i');
			if (icon.hasClass('fa-bars')) {
				icon.removeClass('fa-bars').addClass('fa-times');  
			} else {
				icon.removeClass('fa-times').addClass('fa-bars');
			}
		});
	});
	

	// Banner Carousel
	$(document).ready(function(){
		$(".banner_carousel").owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			nav: false,
			touchDrag: false,
			mouseDrag: false, 
			dots: false,
			autoplayTimeout: 6000, 
			smartSpeed: 3000, 
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			onTranslated: function(event) {
				$(".banner_carousel_item").removeClass("active");  
				$(".owl-item.active .banner_carousel_item").addClass("active");  
			},
			onInitialized: function(event) {
				$(".owl-item.active .banner_carousel_item").addClass("active");  
			}
		});
	});

	$(document).ready(function () {
		$(window).on("scroll", function () { 
			if ($(window).scrollTop() > 0) {
				$(".bars_icon").addClass("fixed_bars");
			} else {
				$(".bars_icon").removeClass("fixed_bars");
			}
		});
	});
	
	





});