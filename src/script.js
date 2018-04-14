$(document).ready(function() {
    function showSocialNetworkingZuck() {
	const url = chrome.extension.getURL('jesse.small.png');
	$('body').prepend('<img class="corner-zuck" id="social-networking" src="' + url + '" />');
	$('img#social-networking').hide();
	$('img#social-networking').fadeIn(500);
    }
    function hideSocialNetworkingZuck() {
	$('img#social-networking').fadeOut(500);
    }
    function showDrinkingZuck() {
	const url = chrome.extension.getURL('drinking.gif');
	$('body').prepend('<img class="corner-zuck" id="drinking-zuck" src="' + url + '" />');
	$('img#drinking-zuck').hide();
	$('img#drinking-zuck').fadeIn(500);
    }
    function hideDrinkingZuck() {
	$('img#drinking-zuck').fadeOut(500);
    }
    function showBasicZuck() {
	const zucc = chrome.extension.getURL('zucc.small.png');
	const eyes = chrome.extension.getURL('eyes.small.png');
	$('body').prepend('<img class="corner-zuck" id="zucks-eyes" src="' + eyes + '" />');
	$('body').prepend('<img class="corner-zuck" id="basic-zuck" src="' + zucc + '" />');
	$('img#basic-zuck').hide();
	$('img#zucks-eyes').hide();
	$('img#basic-zuck').fadeIn(500);
	$('img#zucks-eyes').fadeIn(500);
    }
    function hideBasicZuck() {
	$('img#basic-zuck').fadeOut(500);
	$('img#zucks-eyes').fadeOut(500);
    }
    function showWater() {
	const url = chrome.extension.getURL('water.small.png');
	$('body').prepend('<img class="corner-zuck" id="water" src="' + url + '" />');
	$('img#water').hide();
	$('img#water').fadeIn(500);
    }
    function hideWater() {
	$('img#water').fadeOut(500);
    }
    function showRofl() {
	const url = chrome.extension.getURL('rofl.small.png');
	$('body').prepend('<img class="corner-zuck" id="rofl" src="' + url + '" />');
	$('img#rofl').hide();
	$('img#rofl').fadeIn(500);
    }
    function hideRofl() {
	$('img#rofl').fadeOut(500);
    }
    function showThicc() {
	const url = chrome.extension.getURL('thicc.small.png');
	$('body').prepend('<img class="corner-zuck" id="thicc" src="' + url + '" />');
	$('img#thicc').hide();
	$('img#thicc').fadeIn(500);
    }
    function hideThicc() {
	$('img#thicc').fadeOut(500);
    }

    const events = [
	{
	    keyword: 'water',
	    action: showWater,
	    active: false,
	    deactivate: hideWater
	},
	{
	    keyword: 'nudes',
	    action: showThicc,
	    active: false,
	    deactivate: hideThicc
	},
	{
	    keyword: 'rofl',
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
	    keyword: 'mark zuckerberg',
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
	const right = ((screenWidth - e.screenX) / screenWidth) * 7;
	const bottom = ((screenHeight - e.screenY) / screenHeight) * 4;
	$('img#zucks-eyes').css('right', right);
	$('img#zucks-eyes').css('bottom', bottom);
    });

    scanLoop();
});
