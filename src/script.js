$(document).ready(function() {

    function initImgs() {
	const eyes = chrome.extension.getURL('eyes.small.png');
	$('body').prepend('<img class="corner-zuck" id="zucks-eyes" src="' + eyes + '" />');
	const networking = chrome.extension.getURL('jesse.small.png');
	$('body').prepend('<img class="corner-zuck" id="social-networking" src="' + networking + '" />');
	const drinking = chrome.extension.getURL('drinking.gif');
	$('body').prepend('<img class="corner-zuck" id="drinking-zuck" src="' + drinking + '" />');
	const zucc = chrome.extension.getURL('zucc.small.png');
	$('body').prepend('<img class="corner-zuck" id="basic-zuck" src="' + zucc + '" />');
	const water = chrome.extension.getURL('water.small.png');
	$('body').prepend('<img class="corner-zuck" id="water" src="' + water + '" />');
	const rofl = chrome.extension.getURL('rofl.small.png');
	$('body').prepend('<img class="corner-zuck" id="rofl" src="' + rofl + '" />');
	const thicc = chrome.extension.getURL('thicc.small.png');
	$('body').prepend('<img class="corner-zuck" id="thicc" src="' + thicc + '" />');
	const dad = chrome.extension.getURL('dad.small.png');
	$('body').prepend('<img class="corner-zuck" id="dad" src="' + dad + '" />');
	const loveyou = chrome.extension.getURL('loveyou.small.png');
	$('body').prepend('<img class="corner-zuck" id="loveyou" src="' + loveyou + '" />');
	const fb = chrome.extension.getURL('heart-eyes.small.png');
	$('body').prepend('<img class="corner-zuck" id="fb" src="' + fb + '" />');
	const stupid = chrome.extension.getURL('long_neck.small.png');
	$('body').prepend('<img class="corner-zuck" id="stupid" src="' + stupid + '" />');
	const smile = chrome.extension.getURL('smile.gif');
	$('body').prepend('<img class="corner-zuck" id="smile" src="' + smile + '" />');
	const fakenews = chrome.extension.getURL('fake_news.small.png');
	$('body').prepend('<img class="corner-zuck" id="fakenews" src="' + fakenews + '" />');
	const webcam = chrome.extension.getURL('webcam.small.png');
	$('body').prepend('<img class="corner-zuck" id="webcam" src="' + webcam + '" />');
	const illuminati = chrome.extension.getURL('illuminati.small.png');
	$('body').prepend('<img class="corner-zuck" id="illuminati" src="' + illuminati + '" />');
	const reptilian = chrome.extension.getURL('liz-zucc.gif');
	$('body').prepend('<img class="corner-zuck" id="reptilian" src="' + reptilian + '" />');
	const hiding = chrome.extension.getURL('hiding.gif');
	$('body').prepend('<img class="corner-zuck" id="hiding" src="' + hiding + '" />');
	const terminate = chrome.extension.getURL('terminate.gif');
	$('body').prepend('<img class="corner-zuck" id="terminate" src="' + terminate + '" />');
	const theroom = chrome.extension.getURL('ohhimark.png');
	$('body').prepend('<img class="corner-zuck" id="theroom" src="' + theroom + '" />');

	$('img#reptilian').hide();
	$('img#webcam').hide();
	$('img#social-networking').hide();
	$('img#drinking-zuck').hide();
	$('img#basic-zuck').hide();
	$('img#zucks-eyes').hide();
	$('img#water').hide();
	$('img#rofl').hide();
	$('img#thicc').hide();
	$('img#dad').hide();
	$('img#loveyou').hide();
	$('img#stupid').hide();
	$('img#fb').hide();
	$('img#smile').hide();
	$('img#fakenews').hide();
	$('img#illuminati').hide();
	$('img#hiding').hide();
	$('img#reptile').hide();
	$('img#terminate').hide();
	$('img#theroom').hide();
    }

    function showSocialNetworkingZuck() {
	$('img#social-networking').fadeIn(500);
    }
    function hideSocialNetworkingZuck() {
	$('img#social-networking').fadeOut(500);
    }
    function showDrinkingZuck() {
	$('img#drinking-zuck').fadeIn(500);
    }
    function hideDrinkingZuck() {
	$('img#drinking-zuck').fadeOut(500);
    }
    function showBasicZuck() {
	$('img#basic-zuck').fadeIn(500);
	$('img#zucks-eyes').fadeIn(500);
    }
    function hideBasicZuck() {
	$('img#basic-zuck').fadeOut(500);
	$('img#zucks-eyes').fadeOut(500);
    }
    function showWater() {
	$('img#water').fadeIn(500);
    }
    function hideWater() {
	$('img#water').fadeOut(500);
    }
    function showRofl() {
	$('img#rofl').fadeIn(500);
    }
    function hideRofl() {
	$('img#rofl').fadeOut(500);
    }
    function showThicc() {
	$('img#thicc').fadeIn(500);
    }
    function hideThicc() {
	$('img#thicc').fadeOut(500);
    }
    function showDad() {
	$('img#dad').fadeIn(500);
    }
    function hideDad() {
	$('img#dad').fadeOut(500);
    }
    function showLove() {
	$('img#loveyou').fadeIn(500);
    }
    function hideLove() {
	$('img#loveyou').fadeOut(500);
    }
    function showFb() {
	$('img#fb').fadeIn(500);
    }
    function hideFb() {
	$('img#fb').fadeOut(500);
    }
    function showStupid() {
	$('img#stupid').fadeIn(500);
    }
    function hideStupid() {
	$('img#stupid').fadeOut(500);
    }
    function showSmile() {
	$('img#smile').fadeIn(500);
    }
    function hideSmile() {
	$('img#smile').fadeOut(500);
    }
    function showFakeNews() {
	$('img#fakenews').fadeIn(500);
	$('img#zucks-eyes').fadeIn(500);
    }
    function hideFakeNews() {
	$('img#fakenews').fadeOut(500);
	$('img#zucks-eyes').fadeOut(500);
    }
    function showWebcam() {
	$('img#webcam').fadeIn(500);
	$('img#zucks-eyes').fadeIn(500);
    }
    function hideWebcam() {
	$('img#webcam').fadeOut(500);
	$('img#zucks-eyes').fadeOut(500);
    }
    function showIlluminati() {
	$('img#illuminati').fadeIn(500);
    }
    function hideIlluminati() {
	$('img#illuminati').fadeOut(500);
    }
    function showReptilian() {
	$('img#reptilian').fadeIn(500);
    }
    function hideReptilian() {
	$('img#reptilian').fadeOut(500);
    }
    function showHiding() {
	$('img#hiding').fadeIn(500);
    }
    function hideHiding() {
	$('img#hiding').fadeOut(500);
    }
    function showTerminate() {
	$('img#terminate').fadeIn(500);
    }
    function hideTerminate() {
	$('img#terminate').fadeOut(500);
    }
    function showRoom() {
	$('img#theroom').fadeIn(500);
    }
    function hideRoom() {
	$('img#theroom').fadeOut(500);
    }

    const events = [
	{
	    keyword: 'water',
	    action: showWater,
	    active: false,
	    deactivate: hideWater
	},
	{
	    keyword: 'lizard',
	    action: showReptilian,
	    active: false,
	    deactivate: hideReptilian
	},
	{
	    keyword: 'the room',
	    action: showRoom,
	    active: false,
	    deactivate: hideRoom
	},
	{
	    keyword: 'terminat',
	    action: showTerminate,
	    active: false,
	    deactivate: hideTerminate
	},
	{
	    keyword: 'porn',
	    action: showHiding,
	    active: false,
	    deactivate: hideHiding
	},
	{
	    keyword: 'illuminati',
	    action: showIlluminati,
	    active: false,
	    deactivate: hideIlluminati
	},
	{
	    keyword: 'webcam',
	    action: showWebcam,
	    active: false,
	    deactivate: hideWebcam
	},
	{
	    keyword: 'cambridge analytica',
	    action: showFakeNews,
	    active: false,
	    deactivate: showFakeNews
	},
	{
	    keyword: 'lol',
	    action: showSmile,
	    active: false,
	    deactivate: hideSmile
	},
	{
	    keyword: 'long',
	    action: showStupid,
	    active: false,
	    deactivate: hideStupid
	},
	{
	    keyword: 'data',
	    action: showFb,
	    active: false,
	    deactivate: hideFb
	},
	{
	    keyword: 'i love you',
	    action: showLove,
	    active: false,
	    deactivate: hideLove
	},
	{
	    keyword: 'dad',
	    action: showDad,
	    active: false,
	    deactivate: hideDad
	},
	{
	    keyword: 'nudes',
	    action: showThicc,
	    active: false,
	    deactivate: hideThicc
	},
	{
	    keyword: 'haha',
	    action: showRofl,
	    active: false,
	    deactivate: hideRofl
	},
	{
	    keyword: 'network',
	    action: showSocialNetworkingZuck,
	    active: false,
	    deactivate: hideSocialNetworkingZuck
	},
	{
	    keyword: 'drink',
	    action: showDrinkingZuck,
	    active: false,
	    deactivate: hideDrinkingZuck
	},
	{
	    keyword: 'zuckerberg',
	    action: showBasicZuck,
	    active: false,
	    deactivate: hideBasicZuck
	},
    ];

    function getDeactivationFunctions() {
	let funcs = [];
	events.forEach(e => {
	    if (e.active) {
		funcs.push(() => {
		    e.deactivate();
		    e.active = false;
		});
	    }
	});
	return funcs;
    }

    function zeroActiveEvents() {
	for (let i = 0; i < events.length; i++) {
	    if (events[i].active) {
		return false;
	    }
	}
	return true;
    }

    function fireEvents(textElements) {
	let elements = [];
	textElements.each(function() {
	    elements.push({
		text: $(this).text().toLowerCase(),
		position: $(this).offset().top
	    }); 
	});
	const o = elements
	    .map(te => {
		const text = te.text;	
		const elementPosition = te.position;	
		const scrollPosition = $(window).scrollTop();
		const windowHeight = $(window).height();

		const chosenEvent = events
		    .filter(ev => {
			return text.indexOf(ev.keyword) !== -1;
		    })
		    .filter(ev => {
			return elementPosition <= scrollPosition + 400 && elementPosition >= scrollPosition;
		    })[0]

		return {
		    ev: chosenEvent,
		    element: te
		};

	    })
	    .filter(o => o.ev)
	    .sort((o1, o2) => {
		const te1Pos = o1.element.position;	
		const te2Pos = o2.element.position;	
		return te2Pos - te1Pos;
	    })[0];
	if (o && o.ev && !o.ev.active) {
	    console.log(o.ev);
	    getDeactivationFunctions().forEach(d => {
		d();	
	    }); 
	    o.ev.action();
	    o.ev.active = true;
	}
	if (zeroActiveEvents()) {
	    const defaultEvent = events[events.length-1];
	    defaultEvent.active = true;	    
	    defaultEvent.action();	    
	}
    }

    function scanPageForKeywords() {
	let textElements = $.merge($('p'), $(':header'));
	textElements = $.merge(textElements, $('a'));
	fireEvents(textElements);
    }

    function scanLoop() {
	setTimeout(function() {
	    scanPageForKeywords();	
	    scanLoop();
	}, 40);
    }

    window.addEventListener('mousemove', (e) => {
	const screenWidth = $(window).width();
	const screenHeight = $(window).height();
	let horizontal = ((screenWidth - e.screenX) / screenWidth) * 7;
	let rightOrLeft = 'right';
	if ($('img#loveyou').css('right') === 'auto') {
	    rightOrLeft = 'left';
	    horizontal = 7 - horizontal;
	}
	const bottom = ((screenHeight - e.screenY) / screenHeight) * 4;
	$('img#zucks-eyes').css(rightOrLeft, horizontal);
	$('img#zucks-eyes').css('bottom', bottom);
    });

    initImgs();
    $('.corner-zuck').on('mouseover', () => {
	const rightVal = $('img#loveyou').css('right');
	if (rightVal !== 'auto') {
	    $('.corner-zuck').css('right', 'auto');
	    $('.corner-zuck').css('left', '0');
	} else {
	    $('.corner-zuck').css('right', '0');
	    $('.corner-zuck').css('left', 'auto');
	}
    });

    scanLoop();
});
