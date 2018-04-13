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

    function scanPageForKeywords() {
	$('p').each(function() {
	    events.forEach(e => {
		const text = $(this).text().toLowerCase();
		if (text.indexOf(e.keyword) !== -1) {
		    e.action();
		}
	    });
	});
    }

    console.log('jquery is ready');
    scanPageForKeywords();
});
