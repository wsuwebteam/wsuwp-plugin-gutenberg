jQuery(document).ready( function() {

	let blockLoaded = false;
	let blockLoadedInterval = setInterval(function() {
		if (document.getElementById('post-title-0')) {

			wp.blocks.unregisterBlockStyle(
				'core/button', [ 'fill', 'outline' ]
			);
			
			wp.blocks.unregisterBlockStyle(
				'core/image', [ 'default', 'rounded' ]
			);
		
			wp.blocks.unregisterBlockStyle(
				'core/separator', [ 'default', 'wide', 'dots' ]
			);

			blockLoaded = true;
		}
		if ( blockLoaded ) {
			clearInterval( blockLoadedInterval );
		}
	}, 500);

});