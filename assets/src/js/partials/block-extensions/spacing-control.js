import { InspectorControls } from '@wordpress/block-editor';
import { SpacingClassNameSelector } from '../block-controls/blockControls';

function insertSpacingControl( OriginalComponent ) {
    return function( props ) {
        const unsupportedBlockTypes = ['wsuwp/row', 'wsuwp/column'];

        if( !unsupportedBlockTypes.includes(props.name) ){
            return (
                <>
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
                    
                    <OriginalComponent { ...props } />
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
