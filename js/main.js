window._glob={};const F_ENDPOINT="https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/namespaces/fn-9893151b-0162-4035-b250-f6a60919b905/actions/form/send?blocking=true&result=true",T="YzViNjU5NDMtMzA2My00MmUwLTg1YzgtYTg5MTkxOTBlNmFlOmZybUI1cFlOdjVCdHlvSWZjZWdVRHd2aDFQZDViOU1DeTVLaU9tMVlTc2tKSDhSNnR5ZGF6Z1cxV3NqZEtoano=",NAKSHATRAS=["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Aslesha","Magha","Purva Phalguni","Uttara Phalguni","Hastha","Chitra","Swathi","Visakha","Anuradha","Jyeshta","Moola","Poorvashada","Utharashada","Sravana","Dhanishta","Satabhisha","Poorvabhadrapada","Uttarabhadrapada","Revathi"],DEFAULT_HOUSES=[1,2,3,4,5,6,7,8,9,10,11,12],PLANET_COLOR_CODE={Ju:"#bdb304",Su:"#6e2a03",Mo:"#808080",Ve:"#d980c0",Ma:"#610505",Me:"#07520f",Sa:"#03081a",Ra:"#030382",Ke:"#e8102d"},PLANET_SHORT_CODES={Jupiter:"Ju",Sun:"Su",Moon:"Mo",Venus:"Ve",Mars:"Ma",Mercury:"Me",Saturn:"Sa","Rahu Mean":"Ra","Ketu Mean":"Ke"},ZODIACS=["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Saggitarius","Capricorn","Aquarius","Pisces"];var getDynamicXCords=(t,o,a)=>{var e=[0,30,30,60,60,90,90,120,120];return[0,1,5,6,7,11].includes(t)?o%2==0?a-e[o]:a+e[o]:a},getDynamicYCords=(t,o,a)=>{var e=[0,30,30,60,60,90,90,120,120];return[2,3,4,8,9,10].includes(t)?o%2==0?a-e[o]:a+e[o]:a},bhava_chalit=function(t){"use strict";var o=15,a={},e=t=>{a=t,n()},n=()=>{o=a.response.ascendant.asc_deg},r=()=>{var t=[[],[],[],[],[],[],[],[],[],[],[],[]],e=a.response.planets,n={};for(var r in e){var i=e[r].degree,l=o-15<0?o-15+360:o-15;if(i>l){var s=Math.ceil((i-l)/30);n[r]=s,PLANET_SHORT_CODES[r]&&t[s-1].push(PLANET_SHORT_CODES[r])}else{s=Math.ceil((360-l+i)/30);n[r]=s,PLANET_SHORT_CODES[r]&&t[s-1].push(PLANET_SHORT_CODES[r])}}return t},i={init:e,getBhavaChalit:r};return t.init=e,t.getBhavaChalit=r,t.drawSvgBhavaPlanets=t=>{var o=SVG(t);const a=r();for(var e=[[390,240],[240,150],[150,240],[250,390],[150,540],[240,630],[390,540],[540,630],[640,540],[540,390],[640,240],[540,150]],n=0;n<a.length;n++)for(var i=0;i<a[n].length;i++){var l=a[n][i];o.text((function(t){t.tspan(l).size(20)})).font({size:20,fill:PLANET_COLOR_CODE[l]||"#bdb304",anchor:"middle"}).move(getDynamicXCords(n,i,e[n][0]),getDynamicYCords(n,i,e[n][1]))}},t.default=i,Object.defineProperty(t,"__esModule",{value:!0}),t}({});!function(t){"use strict";var o=t=>(t=t.toFixed(2),NAKSHATRAS[Math.ceil(t/13.33)-1]),a=t=>Math.ceil(t.toFixed(3)%13.33/3.334);0!==t(".testimonial-wrap").length&&t(".testimonial-wrap").slick({slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:6e3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:900,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),t(window).width()<992&&t("#navbar .dropdown-toggle").on("click",(function(){t(this).siblings(".dropdown-menu").animate({height:"toggle"},300)})),t(window).on("scroll",(function(){if(t("#scroll-to-top").length){var o=t("#scroll-to-top");t(window).scrollTop()>=200?o.fadeIn(200):o.fadeOut(100)}})),t("#scroll-to-top").length&&t("#scroll-to-top").on("click",(function(){return t("body,html").animate({scrollTop:0},600),!1})),0!==t(".portfolio-gallery").length&&t(".portfolio-gallery").each((function(){t(this).find(".popup-gallery").magnificPopup({type:"image",gallery:{enabled:!0}})})),0!==t(".counter-stat").length&&t(".counter-stat").counterUp({delay:10,time:1e3});var e=(t,o)=>{const a="#F75757";var e="Chart Title";o&&(e=o);var n=SVG().addTo(t).size(400,400);n.polygon("400, 100 250, 250 400, 400 550, 250").fill("none").stroke({color:a,width:2}),n.polygon("100 100, 250 250, 400 100").fill("none").stroke({color:a,width:2}),n.polygon("100 400, 250 250, 100 100").fill("none").stroke({color:a,width:2}),n.polygon("250 250,100 400,250 550,400 400").fill("none").stroke({color:a,width:2}),n.polygon("100 400,250 550,100 700").fill("none").stroke({color:a,width:2}),n.polygon("100 700,250 550,400 700").fill("none").stroke({color:a,width:2}),n.polygon("400 400,250 550,400 700,550 550").fill("none").stroke({color:a,width:2}),n.polygon("400 700,550 550,700 700").fill("none").stroke({color:a,width:2}),n.polygon("700 400,550 550,700 700").fill("none").stroke({color:a,width:2}),n.polygon("550 250,700 400,550 550,400 400").fill("none").stroke({color:a,width:2}),n.polygon("700 100,550 250,700 400").fill("none").stroke({color:a,width:2}),n.polygon("400 100,550 250,700 100").fill("none").stroke({color:a,width:2});return n.text(e).font({size:30,fill:a,anchor:"middle"}).move(100,60),n.text("© Agyat.One Ephemeris").font({size:40,fill:a,opacity:.1,anchor:"middle"}).move(210,375),n.text("© Agyat.One Ephemeris").font({fill:a,anchor:"middle"}).move(530,700),n.text("Agyat.One Astrology").font({size:10,fill:a,anchor:"middle"}).move(110,685),n.text("Agyat.One Astrology").font({size:10,fill:a,anchor:"middle"}).move(110,680).transform({rotate:270,translateX:-50,translateY:-50,scale:1}),n.text("Agyat.One Astrology").font({size:10,fill:a,anchor:"middle"}).move(600,100),n.text("Agyat.One Astrology").font({size:10,fill:a,anchor:"middle"}).move(700,200).transform({rotate:270,translateX:-50,translateY:-50,scale:1}),n.transform({scale:1}),n.viewbox(0,0,700,700),n},n=(t,o)=>{o=o||1;for(var a=DEFAULT_HOUSES.slice(o-1).concat(DEFAULT_HOUSES.slice(0,o-1)),e=[[390,350],[240,210],[210,240],[360,390],[210,540],[240,570],[390,420],[540,570],[580,540],[430,390],[580,240],[540,210]],n=0;n<a.length;n++)t.text(a[n]).font({size:20,fill:"#F75757",anchor:"middle"}).move(e[n][0],e[n][1])},r=(o,a)=>{var e=[[],[],[],[],[],[],[],[],[],[],[],[]];return t.each(a,(function(t,a){PLANET_SHORT_CODES[t]&&e[i(a.zodiac,o)].push(PLANET_SHORT_CODES[t])})),console.log("extractPlanets",e),e},i=(t,o)=>(console.log("getHouseByZodiac",t,o,t-o,12-o+1),t>=o?t-o:12-o+t),l=t=>ZODIACS[t-1],s=t=>Math.floor(t)+"°"+Math.round(t%Math.floor(t)*60)+"'",c=i=>{t("#snap").empty();var c=(window.localStorage?JSON.parse(window.localStorage.getItem("chart")):window._glob.chart).response,d=e("#snap","Lagna Chart"),h=c.ascendant.ascendant;i&&(h=i),n(d,h),((t,o,a)=>{const e=r(t,a);for(var n=[[390,240],[240,150],[150,240],[250,390],[150,540],[240,630],[390,540],[540,630],[640,540],[540,390],[640,240],[540,150]],i=0;i<e.length;i++)for(var l=0;l<e[i].length;l++){var s=e[i][l];o.text((function(t){t.tspan(s).size(20)})).font({size:20,fill:PLANET_COLOR_CODE[s]||"#bdb304",anchor:"middle"}).move(getDynamicXCords(i,l,n[i][0]),getDynamicYCords(i,l,n[i][1]))}})(h,d,c.planets),(e=>{const n=t("#table");var r=[];r.push({planet:"Asc",house:"1st",zodiac:l(e.ascendant.ascendant),cusp_degree:s((e.ascendant.asc_deg%30).toFixed(2)),motion:"",nakshatra:o(e.ascendant.asc_deg),pada:a(e.ascendant.asc_deg)}),t.each(e.planets,(function(t,e){var n;PLANET_SHORT_CODES[t]&&r.push({planet:t,house:(n=e.house,["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"][n-1]),zodiac:l(e.zodiac),cusp_degree:s(e.cusp_degree.toFixed(2)),motion:e.motion,nakshatra:o(e.degree),pada:a(e.degree)})})),console.log("data",r),n.bootstrapTable({}),n.bootstrapTable("load",r),n.show()})(c)};window.redraw=c,t((function(){if(t(".controls_table")&&t(".controls_table").hide(),t("input[type='date'].chart-dob").length){var o=new Date,a=[o.getFullYear(),(o.getMonth()+1).toString().padStart(2,"0"),o.getDate().toString().padStart(2,"0")].join("-"),r=[o.getHours().toString().padStart(2,"0"),o.getMinutes().toString().padStart(2,"0")].join(":");t("input[type='text'].chart-name").val("Jatak"),t("input[type='date'].chart-dob").val(a),t("input[type='time'].chart-tob").val(r),setTimeout((function(){t("#birth-chart-form")&&t("#birth-chart-form").submit()}),300)}if(t("#snap").length){var i=e("#snap","Lagna Chart");n(i);var l=e("#snap1","Bhava Chalit");n(l)}emailjs.init({publicKey:"ObsW-Ld16OF4X46C6"});var s=async function(o){await axios.post(F_ENDPOINT,o,{headers:{"Content-Type":"application/json",Authorization:`Basic ${T}`}}).then((function(o){console.log(o),t("#consltation-form").hide(500),t(".submission_complete").show(500)})).catch((function(t){console.log(t)}))},d=o=>{axios.get("https://ephemeris.agyat.one/api/v1/chart_by_loc",{params:o}).then((function(o){const a=o.data.chart;o.data.chart&&(window.localStorage?window.localStorage.setItem("chart",JSON.stringify(a)):window._glob.chart=JSON.stringify(a),c(),(o=>{var a;t("#snap1").empty();var r=(a=window.localStorage?JSON.parse(window.localStorage.getItem("chart")):window._glob.chart).response.ascendant.ascendant;o&&(r=o);var i=e("#snap1","Bhava Chalit");n(i,r),bhava_chalit.init(a),bhava_chalit.drawSvgBhavaPlanets("#snap1 svg")})())})).catch((function(t){console.debug(t),alert("Sorry, Could not load the chart. Try Again")}))};t("#birth-chart-form").submit((o=>{o.preventDefault();var a={};t.each(t("#birth-chart-form").serializeArray(),(function(t,o){a[o.name]=o.value})),console.debug("Form Values: ",a),d(a)})),t("#subscription").on("submit",(t=>{t.preventDefault(),console.log("subscription");const o=new FormData(document.getElementById("subscription")),a=Object.fromEntries(o);s(a)})),t("#consltation-form").on("submit",(function(t){t.preventDefault();const o=new FormData(document.getElementById("consltation-form")),a=Object.fromEntries(o);console.debug(a),s(a)})),t("#contactFormSubmit").on("click",(function(t){t.preventDefault();const o=new FormData(document.getElementById("contact-form")),a=Object.fromEntries(o);console.debug(a);var e={from_name:a.name,from_email:a.email,message:a.message};s(e)})),t(".dynamicCopyrightYear").replaceWith((new Date).getFullYear())}))}(jQuery);