window._glob={};const F_ENDPOINT="https://faas-nyc1-2ef2e6cc.doserverless.co/api/v1/namespaces/fn-9893151b-0162-4035-b250-f6a60919b905/actions/form/send?blocking=true&result=true",T="YzViNjU5NDMtMzA2My00MmUwLTg1YzgtYTg5MTkxOTBlNmFlOmZybUI1cFlOdjVCdHlvSWZjZWdVRHd2aDFQZDViOU1DeTVLaU9tMVlTc2tKSDhSNnR5ZGF6Z1cxV3NqZEtoano=",NAKSHATRAS=["Ashwini","Bharani","Krittika","Rohini","Mrigashira","Ardra","Punarvasu","Pushya","Aslesha","Magha","Purva Phalguni","Uttara Phalguni","Hastha","Chitra","Swathi","Visakha","Anuradha","Jyeshta","Moola","Poorvashada","Utharashada","Sravana","Dhanishta","Satabhisha","Poorvabhadrapada","Uttarabhadrapada","Revathi"],DEFAULT_HOUSES=[1,2,3,4,5,6,7,8,9,10,11,12],PLANET_COLOR_CODE={Ju:"#bdb304",Su:"#6e2a03",Mo:"#808080",Ve:"#d980c0",Ma:"#610505",Me:"#07520f",Sa:"#03081a",Ra:"#030382",Ke:"#e8102d"},PLANET_SHORT_CODES={Jupiter:"Ju",Sun:"Su",Moon:"Mo",Venus:"Ve",Mars:"Ma",Mercury:"Me",Saturn:"Sa","Rahu Mean":"Ra","Ketu Mean":"Ke"},ZODIACS=["Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Saggitarius","Capricorn","Aquarius","Pisces"];var getDynamicXCords=(t,a,e)=>{var o=[0,30,30,60,60,90,90,120,120];return[0,1,5,6,7,11].includes(t)?a%2==0?e-o[a]:e+o[a]:e},getDynamicYCords=(t,a,e)=>{var o=[0,30,30,60,60,90,90,120,120];return[2,3,4,8,9,10].includes(t)?a%2==0?e-o[a]:e+o[a]:e},populator=function(t){return t.populate=()=>{var t=window.localStorage?JSON.parse(window.localStorage.getItem("chart")):window._glob.chart;const a=$(".celebrity_data"),e=a.find(".dob .data"),o=a.find(".tob .data"),n=a.find(".location .data"),r=a.find(".rating .data");var i;t.request&&(t.request.location&&n.text(t.request.location),t.request.agyat_rating&&r.text(t.request.agyat_rating),t.request.hour&&o.text(`${(i=t.request).hour.toString().padStart(2,"0")}:${i.minute.toString().padStart(2,"0")}`),t.request.day&&e.text((t=>`${t.day.toString().padStart(2,"0")}/${t.month.toString().padStart(2,"0")}/${t.year}`)(t.request)))},Object.defineProperty(t,"__esModule",{value:!0}),t}({}),bhava_chalit=function(t){"use strict";var a=15,e={},o=t=>{e=t,n()},n=()=>{a=e.response.ascendant.asc_deg},r=()=>{var t=[[],[],[],[],[],[],[],[],[],[],[],[]],o=e.response.planets,n={};for(var r in o){var i=o[r].degree,l=a-15<0?a-15+360:a-15;if(i>l){var s=Math.ceil((i-l)/30);n[r]=s,PLANET_SHORT_CODES[r]&&t[s-1].push(PLANET_SHORT_CODES[r])}else{s=Math.ceil((360-l+i)/30);n[r]=s,PLANET_SHORT_CODES[r]&&t[s-1].push(PLANET_SHORT_CODES[r])}}return t},i={init:o,getBhavaChalit:r};return t.init=o,t.getBhavaChalit=r,t.drawSvgBhavaPlanets=t=>{var a=SVG(t);const e=r();for(var o=[[390,240],[240,150],[150,240],[250,390],[150,540],[240,630],[390,540],[540,630],[640,540],[540,390],[640,240],[540,150]],n=0;n<e.length;n++)for(var i=0;i<e[n].length;i++){var l=e[n][i];a.text((function(t){t.tspan(l).size(20)})).font({size:20,fill:PLANET_COLOR_CODE[l]||"#bdb304",anchor:"middle"}).move(getDynamicXCords(n,i,o[n][0]),getDynamicYCords(n,i,o[n][1]))}},t.default=i,Object.defineProperty(t,"__esModule",{value:!0}),t}({});!function(t){"use strict";var a=t=>(t=t.toFixed(2),NAKSHATRAS[Math.ceil(t/13.33)-1]),e=t=>Math.ceil(t.toFixed(3)%13.33/3.334);0!==t(".testimonial-wrap").length&&t(".testimonial-wrap").slick({slidesToShow:2,slidesToScroll:2,infinite:!0,dots:!0,arrows:!1,autoplay:!0,autoplaySpeed:6e3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:900,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),t(window).width()<992&&t("#navbar .dropdown-toggle").on("click",(function(){t(this).siblings(".dropdown-menu").animate({height:"toggle"},300)})),t(window).on("scroll",(function(){if(t("#scroll-to-top").length){var a=t("#scroll-to-top");t(window).scrollTop()>=200?a.fadeIn(200):a.fadeOut(100)}})),t("#scroll-to-top").length&&t("#scroll-to-top").on("click",(function(){return t("body,html").animate({scrollTop:0},600),!1})),0!==t(".portfolio-gallery").length&&t(".portfolio-gallery").each((function(){t(this).find(".popup-gallery").magnificPopup({type:"image",gallery:{enabled:!0}})})),0!==t(".counter-stat").length&&t(".counter-stat").counterUp({delay:10,time:1e3});var o=(t,a)=>{const e="#F75757";var o="Chart Title";a&&(o=a);var n=SVG().addTo(t).size(400,400);n.polygon("400, 100 250, 250 400, 400 550, 250").fill("none").stroke({color:e,width:2}),n.polygon("100 100, 250 250, 400 100").fill("none").stroke({color:e,width:2}),n.polygon("100 400, 250 250, 100 100").fill("none").stroke({color:e,width:2}),n.polygon("250 250,100 400,250 550,400 400").fill("none").stroke({color:e,width:2}),n.polygon("100 400,250 550,100 700").fill("none").stroke({color:e,width:2}),n.polygon("100 700,250 550,400 700").fill("none").stroke({color:e,width:2}),n.polygon("400 400,250 550,400 700,550 550").fill("none").stroke({color:e,width:2}),n.polygon("400 700,550 550,700 700").fill("none").stroke({color:e,width:2}),n.polygon("700 400,550 550,700 700").fill("none").stroke({color:e,width:2}),n.polygon("550 250,700 400,550 550,400 400").fill("none").stroke({color:e,width:2}),n.polygon("700 100,550 250,700 400").fill("none").stroke({color:e,width:2}),n.polygon("400 100,550 250,700 100").fill("none").stroke({color:e,width:2});return n.text(o).font({size:30,fill:e,anchor:"middle"}).move(100,60),n.text("© Agyat.One Ephemeris").font({size:40,fill:e,opacity:.1,anchor:"middle"}).move(210,375),n.text("© Agyat.One Ephemeris").font({fill:e,anchor:"middle"}).move(530,700),n.text("Agyat.One Astrology").font({size:10,fill:e,anchor:"middle"}).move(110,685),n.text("Agyat.One Astrology").font({size:10,fill:e,anchor:"middle"}).move(110,680).transform({rotate:270,translateX:-50,translateY:-50,scale:1}),n.text("Agyat.One Astrology").font({size:10,fill:e,anchor:"middle"}).move(600,100),n.text("Agyat.One Astrology").font({size:10,fill:e,anchor:"middle"}).move(700,200).transform({rotate:270,translateX:-50,translateY:-50,scale:1}),n.transform({scale:1}),n.viewbox(0,0,700,700),n},n=(t,a)=>{a=a||1;for(var e=DEFAULT_HOUSES.slice(a-1).concat(DEFAULT_HOUSES.slice(0,a-1)),o=[[390,350],[240,210],[210,240],[360,390],[210,540],[240,570],[390,420],[540,570],[580,540],[430,390],[580,240],[540,210]],n=0;n<e.length;n++)t.text(e[n]).font({size:20,fill:"#F75757",anchor:"middle"}).move(o[n][0],o[n][1])},r=(a,e)=>{var o=[[],[],[],[],[],[],[],[],[],[],[],[]];return t.each(e,(function(t,e){PLANET_SHORT_CODES[t]&&o[i(e.zodiac,a)].push(PLANET_SHORT_CODES[t])})),o},i=(t,a)=>t>=a?t-a:12-a+t,l=t=>ZODIACS[t-1],s=t=>Math.floor(t)+"°"+Math.round(60*(t-Math.floor(t)))+"'",c=i=>{t("#snap").empty();var c=(window.localStorage?JSON.parse(window.localStorage.getItem("chart")):window._glob.chart).response,d=o("#snap","Lagna Chart"),h=c.ascendant.ascendant;i&&(h=i),n(d,h),((t,a,e)=>{const o=r(t,e);for(var n=[[390,240],[240,150],[150,240],[250,390],[150,540],[240,630],[390,540],[540,630],[640,540],[540,390],[640,240],[540,150]],i=0;i<o.length;i++)for(var l=0;l<o[i].length;l++){var s=o[i][l];a.text((function(t){t.tspan(s).size(20)})).font({size:20,fill:PLANET_COLOR_CODE[s]||"#bdb304",anchor:"middle"}).move(getDynamicXCords(i,l,n[i][0]),getDynamicYCords(i,l,n[i][1]))}})(h,d,c.planets),(o=>{const n=t("#table");var r=[];r.push({planet:"Asc",house:"1st",zodiac:l(o.ascendant.ascendant),cusp_degree:s((o.ascendant.asc_deg%30).toFixed(2)),motion:"",nakshatra:a(o.ascendant.asc_deg),pada:e(o.ascendant.asc_deg)}),t.each(o.planets,(function(t,o){var n;PLANET_SHORT_CODES[t]&&r.push({planet:t,house:(n=o.house,["1st","2nd","3rd","4th","5th","6th","7th","8th","9th","10th","11th","12th"][n-1]),zodiac:l(o.zodiac),cusp_degree:s(o.cusp_degree.toFixed(2)),motion:o.motion,nakshatra:a(o.degree),pada:e(o.degree)})})),n.bootstrapTable({}),n.bootstrapTable("load",r),n.show()})(c)};window.redraw=c,t((function(){if(t(".controls_table")&&t(".controls_table").hide(),t("input[type='date'].chart-dob").length){var a=new Date,e=[a.getFullYear(),(a.getMonth()+1).toString().padStart(2,"0"),a.getDate().toString().padStart(2,"0")].join("-"),r=[a.getHours().toString().padStart(2,"0"),a.getMinutes().toString().padStart(2,"0")].join(":");t("input[type='text'].chart-name").val("Jatak"),t("input[type='date'].chart-dob").val(e),t("input[type='time'].chart-tob").val(r),setTimeout((function(){t("#birth-chart-form")&&t("#birth-chart-form").submit()}),300)}if(t("#snap").length){var i=o("#snap","Lagna Chart");n(i)}if(t("#snap1").length){var l=o("#snap1","Bhava Chalit");n(l)}var s=async function(a){await axios.post(F_ENDPOINT,a,{headers:{"Content-Type":"application/json",Authorization:`Basic ${T}`}}).then((function(a){t(".alert-success").length&&t(".alert-success").show(500)})).catch((function(a){console.log(a),t(".alert-danger").length&&t(".alert-danger").show(500)}))},d=a=>{axios.get("https://ephemeris.agyat.one/api/v1/chart_by_loc",{params:a}).then((function(a){const e=a.data.chart;a.data.chart&&(window.localStorage?window.localStorage.setItem("chart",JSON.stringify(e)):window._glob.chart=JSON.stringify(e),c(),(a=>{var e;t("#snap1").empty();var r=(e=window.localStorage?JSON.parse(window.localStorage.getItem("chart")):window._glob.chart).response.ascendant.ascendant;a&&(r=a);var i=o("#snap1","Bhava Chalit");n(i,r),bhava_chalit.init(e),bhava_chalit.drawSvgBhavaPlanets("#snap1 svg")})())})).catch((function(t){console.debug(t),alert("Sorry, Could not load the chart. Try Again")}))};if(t("#birth-chart-form").submit((a=>{a.preventDefault();var e={};t.each(t("#birth-chart-form").serializeArray(),(function(t,a){e[a.name]=a.value})),console.debug("Form Values: ",e),d(e)})),t("#subscription").on("submit",(t=>{t.preventDefault();const a=new FormData(document.getElementById("subscription")),e=Object.fromEntries(a);s(e)})),t("#consltation-form").on("submit",(function(t){t.preventDefault();const a=new FormData(document.getElementById("consltation-form")),e=Object.fromEntries(a);console.debug(e),s(e)})),t("#contactFormSubmit").on("click",(function(t){t.preventDefault();const a=new FormData(document.getElementById("contact-form")),e=Object.fromEntries(a);console.debug(e);var o={from_name:e.name,from_email:e.email,message:e.message};s(o)})),t(".dynamicCopyrightYear").replaceWith((new Date).getFullYear()),t(".data-bank").length){var h=t(".data-bank").data("bank-name");h&&axios.get(`/data/${h}.json`).then((function(t){const a=t.data;t.data&&(window.localStorage?window.localStorage.setItem("chart",JSON.stringify(a)):window._glob.chart=JSON.stringify(a),c(),populator.populate())})).catch((function(t){console.debug(t),alert("Sorry, Could not load the chart. Try Again")}))}t("div .data-bank-search input").on("keyup",(function(){var a=t(this).val();if(a.length){var e=window.idx.search(a),o=t("ul.searchresults");if(0===e.length)o.hide();else{for(var n in o.empty(),e){var r=e[n].ref,i=r.split("-").join(" ").split(" ").map((t=>t[0].toUpperCase()+t.slice(1))).join(" "),l='<li><a href="/kundli/bank/'+r+'/">'+i+"</a></li>";o.append(l)}o.show()}}else o.empty()})),axios.get("/lunr/databank.json").then((function(t){window.idx=lunr((function(){this.field("name"),this.ref("page"),this.field("text"),t.data.forEach((function(t){this.add(t)}),this)}))})).catch((function(t){console.debug(t),alert("Sorry, Could not load the chart. Try Again")})),setTimeout((function(){t("#ctaModal").length&&t("#ctaModal").modal({show:!0})}),5e3)}))}(jQuery);