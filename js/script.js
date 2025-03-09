/**
 * Om namoh Bhagavate Vasudevay
 * Hari Om Tat Sat
 */

(function ($) {
	'use strict';

	const F_ENDPOINT = 'https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/namespaces/fn-9893151b-0162-4035-b250-f6a60919b905/actions/form/send?blocking=true&result=true';

	const T = 'YzViNjU5NDMtMzA2My00MmUwLTg1YzgtYTg5MTkxOTBlNmFlOmZybUI1cFlOdjVCdHlvSWZjZWdVRHd2aDFQZDViOU1DeTVLaU9tMVlTc2tKSDhSNnR5ZGF6Z1cxV3NqZEtoano=';
	// testimonial-wrap
	if ($('.testimonial-wrap').length !== 0) {
		$('.testimonial-wrap').slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			dots: true,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 6000,
			responsive: [{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}, {
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	// navbarDropdown
	if ($(window).width() < 992) {
		$('#navbar .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	$(window).on('scroll', function () {
		//.Scroll to top show/hide
		if ($('#scroll-to-top').length) {
			var scrollToTop = $('#scroll-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 200) {
				scrollToTop.fadeIn(200);
			} else {
				scrollToTop.fadeOut(100);
			}
		}
	});
	// scroll-to-top
	if ($('#scroll-to-top').length) {
		$('#scroll-to-top').on('click', function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	}

	// portfolio-gallery
	if ($('.portfolio-gallery').length !== 0) {
		$('.portfolio-gallery').each(function () {
			$(this).find('.popup-gallery').magnificPopup({
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		});
	}

	// Counter
	if ($('.counter-stat').length !== 0) {
		$('.counter-stat').counterUp({
			delay: 10,
			time: 1000
		});
	}

	$(function() {
	    console.log( "ready!" );
			emailjs.init({
				publicKey: "ObsW-Ld16OF4X46C6",
			});

			var sendTouchDownEMail = async function(parameters){
				const {data} = await axios.post(F_ENDPOINT, parameters, {
					headers: {
							'Content-Type': 'application/json',
							'Authorization': `Basic ${T}`
						}
					}
				)
			}

			$( "#contactFormSubmit" ).on( "click", function( e ) {
				e.preventDefault();
				console.log("Preventing default");
				const formData = new FormData(document.getElementById('contact-form'));
				const formProps = Object.fromEntries(formData);
				console.log(formProps);
				var params = {
					from_name: formProps.name,
					from_email: formProps.email,
					message: formProps.message
				}
				sendTouchDownEMail(params);
			});
			$(".dynamicCopyrightYear").replaceWith((new Date()).getFullYear());
	});

})(jQuery);
