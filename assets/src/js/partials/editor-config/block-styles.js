wp.domReady( function() {

    wp.blocks.unregisterBlockStyle(
		'core/button', [ 'fill', 'outline' ]
	);
	
	wp.blocks.unregisterBlockStyle(
		'core/image', [ 'default', 'rounded' ]
	);

    wp.blocks.unregisterBlockStyle(
		'core/separator', [ 'default', 'wide', 'dots' ]
	);

});