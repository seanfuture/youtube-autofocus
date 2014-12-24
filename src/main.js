
(function() {

	function findPlayer() {
		var search = document.getElementById('player').getElementsByTagName('video');
		return search.length > 0 ? search[ 0 ] : undefined;
	}

	function focusPlayer( e ) {
		var currentFocus = document.activeElement;
		if( currentFocus === e ) return;
		e.tabIndex = 0;
		e.focus();
	}

	// Poll for location changes
	var href; setInterval( function() {

		if( href === window.location.href ) return;
		var e = findPlayer();
		if( e === undefined ) return;

		// Needed for subsequent video navigations
		if( href !== undefined ) {
			e.tabIndex = -1;
			e.focus();
		}

		href = window.location.href;
		focusPlayer( e );

	}, 100 );

})();
