const el = wp.element.createElement;

function injectBlockClassName( OriginalComponent ) {
    return function( props ) {
        return el(
            wp.element.Fragment,
            {},                      
            el(
                wp.blockEditor.InspectorControls,
                {},
                el(
                    'div',
                    {
                      className: "is-inspector-for-" + props.name.replace('core/', 'core--'),
                      "aria-hidden": "true"
                    },
                    ''
                )
            ),
            el(OriginalComponent, props),
        );        
    }
}

wp.hooks.addFilter(
    'editor.BlockEdit',
    'wsuwp-plugin-gutenberg/inject-block-class-name',
    injectBlockClassName
);