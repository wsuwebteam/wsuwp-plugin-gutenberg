wp.domReady( function() {

    const enabledEmbeds = [
        'ted',
        'twitter',
        'vimeo',
        'wordpress',
        'youtube',
    ];

    const embedBlock = wp.blocks.getBlockVariations('core/embed');
    
    if (embedBlock) {
        embedBlock.forEach(function(el) {
            if ( !enabledEmbeds.includes(el.name) ) {
                wp.blocks.unregisterBlockVariation('core/embed', el.name);
            }
        })
    }

});