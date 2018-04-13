$(document).ready(function() {
    console.log('jquery is ready');
    $('body').prepend('<img id="social-networking" src="' + chrome.extension.getURL('jesse.small.png') + '" />');
});
