import { InspectorControls } from '@wordpress/block-editor';
import { SpacingClassNameSelector } from '../block-controls/blockControls';

function insertSpacingControl( OriginalComponent ) {
    return function( props ) {       

        const unsupportedBlockTypes = ['core/image','wsuwp/card','wsuwp/image','wsuwp/row', 'wsuwp/column', 'core/button', 'core/paragraph', 'wsuwp/section', 'wsuwp/card-group', 'wsuwp/callout', 'wsuwp/container', 'wsuwp/button'];

        if( !unsupportedBlockTypes.includes(props.name) ){
            return (
                <>

                    <OriginalComponent { ...props } />
                    
                    <InspectorControls>
                        <SpacingClassNameSelector                        
                            spaceSettings={[
                                {
                                    label: 'Outside Spacing (Margin)',
                                    properties: [
                                        {
                                            label: 'Top',
                                            prefix: 'wsu-spacing-before--',                                        
                                            default: 'none',
                                        },
                                        {
                                            label: 'Bottom',
                                            prefix: 'wsu-spacing-after--',
                                            default: 'xmedium',                                        
                                        }
                                    ]
                                }
                            ]}
                            {...props}>					
                        </SpacingClassNameSelector>
                    </InspectorControls>
                    
                </>
            );
        }

        // return default
        return  <OriginalComponent { ...props } />
    }
}


wp.hooks.addFilter(
    'editor.BlockEdit',
    'wsuwp-plugin-gutenberg/insert-spacing-control',
    insertSpacingControl
);
