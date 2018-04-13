$(document).ready(function() {
    function showSocialNetworkingZuck() {
	const url = chrome.extension.getURL('jesse.small.png');
	$('body').prepend('<img id="social-networking" src="' + url + '" />');
	$('img#social-networking').hide();
	$('img#social-networking').fadeIn(500);
    }

    const events = [
	{
	    keyword: 'social networking',
	    action: showSocialNetworkingZuck,
	    active: false
	}
    ];

    function fireEvents(element) {
	for (let i = 0; i < events.length; i++) {
	    const e = events[i];
	    const text = element.text().toLowerCase();
	    const position = element.offset().top;
	    const scrollTop = $(window).scrollTop();
	    const windowHeight = $(window).height();
	    function positionSatisfied() {
		return position <= scrollTop + windowHeight / 2;
	    }
	    if (!e.active && positionSatisfied() && text.indexOf(e.keyword) !== -1) {
		e.action();
		e.active = true;
		return false;
	    }
	}
    }

    function scanPageForKeywords() {
	let textElements = $.merge($('p'), $(':header'));
	textElements.each(function() {
	    return fireEvents($(this));
	});
    }

    function scanLoop() {
	setTimeout(function() {
	    scanPageForKeywords();	
	    scanLoop();
	}, 10);
    }

    scanLoop();
});
