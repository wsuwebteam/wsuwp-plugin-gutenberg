import { InspectorAdvancedControls } from '@wordpress/block-editor';

import {
    hasBlockClassName,
    setBlockClassNameBool,
} from "../block-utilities/blockUtilities";

const {
	ToggleControl,
} = wp.components;

function overflowControl( OriginalComponent ) {
    return function( props ) {       

        const unsupportedBlockTypes = [];

        if( !unsupportedBlockTypes.includes( props.name ) ){

            let {
                attributes,
                setAttributes
            } = props

            return (
                <>

                    <OriginalComponent { ...props } />
                    <InspectorAdvancedControls>
                        <ToggleControl
                            label="Overflow Hidden"
                            checked={ hasBlockClassName( attributes, 'wsu-overflow--hidden') }
                            onChange={ ( overflow ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-overflow--hidden', overflow ) } }
                            />
                    </InspectorAdvancedControls>
                </>
            );
        }

        // return default
        return  <OriginalComponent { ...props } />
    }
}


wp.hooks.addFilter(
    'editor.BlockEdit',
    'wsuwp-plugin-gutenberg/overflow-control',
    overflowControl
);
