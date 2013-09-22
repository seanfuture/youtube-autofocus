var playerEmbed = document.getElementById('player').getElementsByTagName('embed')[0];
function focusPlayerEmbed() {
	playerEmbed.focus();
}
var href;
// Poll for location changes
setInterval(function() {
	if (href === window.location.href) {
		return;
	}
	href = window.location.href;
	focusPlayerEmbed();
}, 100);
