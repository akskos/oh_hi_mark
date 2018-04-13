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
	    action: showSocialNetworkingZuck
	}
    ];

    function fireEvents(element) {
	events.forEach(e => {
	    const text = element.text().toLowerCase();
	    if (text.indexOf(e.keyword) !== -1) {
		e.action();
		return;
	    }
	});
    }

    function scanPageForKeywords() {
	let textElements = $.merge($('p'), $(':header'));
	textElements.each(function() {
	    fireEvents($(this));
	});
    }

    console.log('jquery is ready');
    scanPageForKeywords();
});
