jQuery(document).ready( function() {

    let blockLoaded = false;
    let blockLoadedInterval = setInterval(function() {
    if (document.getElementById('post-title-0')) {
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

        blockLoaded = true;
    }
    if ( blockLoaded ) {
        clearInterval( blockLoadedInterval );
    }
}, 500);

});