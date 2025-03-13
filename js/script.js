/**
 * Om namoh Bhagavate Vasudevay
 * Hari Om Tat Sat
 */

(function ($) {
	'use strict';

	window._glob = {};

	const F_ENDPOINT = 'https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/namespaces/fn-9893151b-0162-4035-b250-f6a60919b905/actions/form/send?blocking=true&result=true';

	const T = 'YzViNjU5NDMtMzA2My00MmUwLTg1YzgtYTg5MTkxOTBlNmFlOmZybUI1cFlOdjVCdHlvSWZjZWdVRHd2aDFQZDViOU1DeTVLaU9tMVlTc2tKSDhSNnR5ZGF6Z1cxV3NqZEtoano=';

	const NAKSHATRAS = [
		"Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra", "Punarvasu", "Pushya", "Aslesha", "Magha", "Purva Phalguni", "Uttara Phalguni", "Hastha", "Chitra", "Swathi", "Visakha", "Anuradha", "Jyeshta", "Moola", "Poorvashada", "Utharashada", "Sravana", "Dhanishta", "Satabhisha", "Poorvabhadrapada", "Uttarabhadrapada", "Revathi"
	];

	const DEFAULT_HOUSES = [1,2,3,4,5,6,7,8,9,10,11,12];

	const PLANET_COLOR_CODE = { "Ju": "#bdb304", "Su": "#6e2a03", "Mo": "#808080", "Ve": "#d980c0", "Ma": "#610505", "Me": "#07520f", "Sa": "#03081a", "Ra": "#030382", "Ke": "#e8102d"};

	const PLANET_SHORT_CODES = {
		"Jupiter": "Ju", "Sun": "Su", "Moon": "Mo",
		"Venus": "Ve", "Mars": "Ma", "Mercury": "Me", "Saturn": "Sa",
		"Rahu Mean": "Ra", "Ketu Mean": "Ke"
	};

	const ZODIACS = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Saggitarius", "Capricorn", "Aquarius", "Pisces"];

	var getNakshatras = (abs_degree) => {
		abs_degree = abs_degree.toFixed(2);
		return NAKSHATRAS[Math.ceil(abs_degree/13.33)-1];
	}

	var getPadas = (abs_degree) => {
		return Math.ceil((abs_degree.toFixed(3)%13.33) / 3.334);
	}

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

	var drawSvgChart = () => {
		const stroke = 2;
		const color = "#F75757";
		var draw = SVG().addTo('#snap').size(800, 800);
		var house1 = draw.polygon('400, 100 250, 250 400, 400 550, 250').fill('none').stroke({ color: color, width: stroke });

		var house2 = draw.polygon('100 100, 250 250, 400 100').fill('none').stroke({ color: color, width: stroke });

		var house3 = draw.polygon('100 400, 250 250, 100 100').fill('none').stroke({ color: color, width: stroke });

		var house4 = draw.polygon('250 250,100 400,250 550,400 400').fill('none').stroke({ color: color, width: stroke });

		var house5 = draw.polygon('100 400,250 550,100 700').fill('none').stroke({ color: color, width: stroke });

		var house6 = draw.polygon('100 700,250 550,400 700').fill('none').stroke({ color: color, width: stroke });

		var house7 = draw.polygon('400 400,250 550,400 700,550 550').fill('none').stroke({ color: color, width: stroke });

		var house8 = draw.polygon('400 700,550 550,700 700').fill('none').stroke({ color: color, width: stroke });

		var house9 = draw.polygon('700 400,550 550,700 700').fill('none').stroke({ color: color, width: stroke });

		var house10 = draw.polygon('550 250,700 400,550 550,400 400').fill('none').stroke({ color: color, width: stroke });

		var house11 = draw.polygon('700 100,550 250,700 400').fill('none').stroke({ color: color, width: stroke });

		var house12 = draw.polygon('400 100,550 250,700 100').fill('none').stroke({ color: color, width: stroke });

		draw.text("© Agyat.One Ephemeris").font({
			size: 40,
			fill: color,
			opacity: 0.1,
			anchor: "middle"
		}).move(210,375)

		draw.text("© Agyat.One Ephemeris").font({
			// size: 20,
			fill: color,
			anchor: "middle"
		}).move(530,700)

		draw.text("Agyat.One Astrology").font({
			size: 10,
			fill: color,
			anchor: "middle"
		}).move(110,685)

		draw.text("Agyat.One Astrology").font({
			size: 10,
			fill: color,
			anchor: "middle",
		}).move(110,680).transform({
  		rotate: 270,
  		translateX: -50,
  		translateY: -50,
  		scale: 1
		})

		draw.text("Agyat.One Astrology").font({
			size: 10,
			fill: color,
			anchor: "middle"
		}).move(600,100)

		draw.text("Agyat.One Astrology").font({
			size: 10,
			fill: color,
			anchor: "middle",
		}).move(700,200).transform({
  		rotate: 270,
  		translateX: -50,
  		translateY: -50,
  		scale: 1
		})

		draw.transform({
		  scale: 1
		})

		return draw;
	}

	var drawSvgHouses = (draw, asc) => {
		asc = asc || 1;
		var houses = DEFAULT_HOUSES.slice(asc-1).concat(DEFAULT_HOUSES.slice(0, asc-1));
		// console.debug(houses);
		var coords = [[390,350], [240,210], [210,240],
									[360,390], [210,540], [240,570],
									[390,420], [540,570], [580,540],
									[430,390], [580,240], [540,210]]
		for(var i=0; i < houses.length; i++){
			draw.text(houses[i]).font({
	  		size: 20,
	  		fill: '#F75757',
				anchor: "middle"
			}).move(coords[i][0], coords[i][1])
		}
	}

	var drawSvgPlanets = (asc, draw, planetsJSON) => {
		const planets = extractPlanets(asc, planetsJSON);
		// console.debug("planetsArray: ", planets);
		var midcoords=[[390,240], [240,150], [150,240],
									[250,390], [150,540], [240,630],
									[390,540], [540,630], [640,540],
									[540,390], [640,240], [540,150]]
		for(var i=0; i < planets.length; i++){
			for(var j=0; j < planets[i].length; j++){
				var split = planets[i][j];//.split(":")
				draw.text(function(add){
					add.tspan(split).size(20)
					// add.tspan(parseFloat(split[1]).toFixed(2)).dy(-10).size(3)
				}).font({
		  		// size: 20,
		  		fill: PLANET_COLOR_CODE[split] || "#bdb304",
					anchor: "middle"
				}).move(getDynamicXCords(i,j,midcoords[i][0]), getDynamicYCords(i,j,midcoords[i][1]))
			}
		}
	}

	var extractPlanets = (asc, planetsJson) => {
		var houses = [[],[],[],[],[],[],[],[],[],[],[],[]];
		$.each(planetsJson, function(k, v) {
			if(PLANET_SHORT_CODES[k])
				houses[getHouseByZodiac(v.zodiac, asc)].push(PLANET_SHORT_CODES[k]);
				// houses[(v.house-1)].push(PLANET_SHORT_CODES[k]);// + ":" + convertToDegreeMinute(v.cusp_degree.toFixed(2)));
		});
		console.log("extractPlanets", houses);
		return houses;
	}

	var getHouseByZodiac = (zodiac, asc) => {
		console.log("getHouseByZodiac", zodiac, asc, zodiac - asc, (12 - asc) + 1)
		if(zodiac >= asc){
			return zodiac - asc;
		} else {
			return (12 - asc) + zodiac;
		}
	}

	var getDynamicXCords = (i, j, coordX) => {
		var xHouses = [0,1,5,6,7,11];
		var adds = [0, 30, 30, 60, 60, 90, 90, 120,120];
		if(xHouses.includes(i)){
			if(j%2 == 0){
				return coordX - adds[j];
			} else {
				return coordX + adds[j];
			}
		} else {
			return coordX;
		}
	}

	var getDynamicYCords = (i, j, coordX) => {
		var yHouses = [2,3,4,8,9,10];
		var adds = [0, 30, 30, 60, 60, 90, 90, 120,120]
		if(yHouses.includes(i)){
			if(j%2 == 0){
				return coordX - adds[j];
			} else {
				return coordX + adds[j];
			}
		} else {
			return coordX;
		}
	}

	var getHouse = (houseNo) => {
		return ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"][houseNo - 1];
	}

	var getZodiacName = (zodiacNo) => {
		return ZODIACS[zodiacNo - 1];
	}

	var convertToDegreeMinute = (degrees) => {
		return Math.floor(degrees) + "°" + Math.round((degrees%Math.floor(degrees))*60) + "'"
	}

	var showTable = (responseObj) => {
		const table = $("#table");
		var data = [];
		data.push({
			"planet": "Asc",
			"house": "1st",
			"zodiac": getZodiacName(responseObj.ascendant.ascendant),
			"cusp_degree": convertToDegreeMinute((responseObj.ascendant.asc_deg%30).toFixed(2)),
			"motion": "",
			"nakshatra": getNakshatras(responseObj.ascendant.asc_deg),
			"pada": getPadas(responseObj.ascendant.asc_deg)
		});
		$.each(responseObj.planets, function(k, v) {
			if(PLANET_SHORT_CODES[k])
				data.push({
					"planet": k,
					"house": getHouse(v.house),
					"zodiac": getZodiacName(v.zodiac),
					"cusp_degree": convertToDegreeMinute(v.cusp_degree.toFixed(2)),
					"motion": v.motion,
					"nakshatra": getNakshatras(v.degree),
					"pada": getPadas(v.degree)
				});
		});
		console.log("data", data)
		table.bootstrapTable({});
		// table.bootstrapTable('removeAll')
		table.bootstrapTable( 'load', data );
		table.show();
	}

	var redrawChart = (overrideAsc) => {
		$("#snap").empty();
		var chartObj;
		if(window.localStorage){
			chartObj = JSON.parse(window.localStorage.getItem('chart'));
		} else {
			chartObj = window._glob.chart;
		}
		var res = chartObj.response;
		var draw = drawSvgChart();
		var asc = res.ascendant.ascendant;
		if(overrideAsc)
			asc = overrideAsc;
		drawSvgHouses(draw, asc);
		drawSvgPlanets(asc, draw, res.planets);
		showTable(res);
	}

	window.redraw = redrawChart;

	$(function() {
	    // console.log( "ready!" );
			if($(".controls_table"))
				$(".controls_table").hide();
			if($("input[type='date'].chart-dob").length){
				var d = new Date();
				var dateString = [d.getFullYear(), (d.getMonth()+1).toString().padStart(2, '0'), d.getDate().toString().padStart(2, '0')].join("-");
				var timeString = [d.getHours().toString().padStart(2, '0'), d.getMinutes().toString().padStart(2, '0')].join(":")
				$("input[type='text'].chart-name").val("Jatak");
				$("input[type='date'].chart-dob").val(dateString);
				$("input[type='time'].chart-tob").val(timeString);
				setTimeout(function(){
					if($("#birth-chart-form"))
						$("#birth-chart-form").submit();
				},300);
			}
			if($('#snap').length){
				var draw = drawSvgChart();
				drawSvgHouses(draw);
			}
			emailjs.init({
				publicKey: "ObsW-Ld16OF4X46C6",
			});

			var sendTouchDownEMail = async function(parameters){
				await axios.post(F_ENDPOINT, parameters, {
					headers: {
							'Content-Type': 'application/json',
							'Authorization': `Basic ${T}`
						}
					}
				).then(function (response) {
			    console.log(response);
					$("#consltation-form").hide(500);
					$(".submission_complete").show(500);
			  })
			  .catch(function (error) {
			    console.log(error);
			  });
			}

			var getChartData = (payloadJson) => {
				axios.get('https://ephemeris.agyat.one/api/v1/chart_by_loc', {
					params: payloadJson
			  })
			  .then(function (response) {
					const chart = response.data.chart;
					if(response.data.chart){
						if(window.localStorage){
							window.localStorage.setItem("chart", JSON.stringify(chart));
						} else {
							window._glob.chart = JSON.stringify(chart);
						}
						redrawChart();
					}
			  })
			  .catch(function (error) {
			    console.debug(error);
					alert("Sorry, Could not load the chart. Try Again");
			  });
			}

			$( "#birth-chart-form" ).submit( (e) => {
				e.preventDefault();
				var values = {};
				$.each($('#birth-chart-form').serializeArray(), function(i, field) {
				    values[field.name] = field.value;
				});
				console.debug("Form Values: ", values);
				getChartData(values);
			});

			$( "#subscription" ).on( "submit", (e) => {
				e.preventDefault();
				console.log('subscription');
				const formData = new FormData(document.getElementById('subscription'));
				const formProps = Object.fromEntries(formData);
				sendTouchDownEMail(formProps);
			} );

			$( "#consltation-form" ).on( "submit", function( e ) {
				e.preventDefault();
				const formData = new FormData(document.getElementById('consltation-form'));
				const formProps = Object.fromEntries(formData);
				console.debug(formProps);
				sendTouchDownEMail(formProps);
			});

			$( "#contactFormSubmit" ).on( "click", function( e ) {
				e.preventDefault();
				const formData = new FormData(document.getElementById('contact-form'));
				const formProps = Object.fromEntries(formData);
				console.debug(formProps);
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
