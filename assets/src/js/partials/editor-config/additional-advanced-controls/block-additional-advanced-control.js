import { InspectorAdvancedControls } from '@wordpress/block-editor';

import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import {
    hasBlockClassName,
    setBlockClassNameBool,
    getBlockClassNameValue,
    setBlockClassName,
} from "../../block-utilities/blockUtilities";

const {
	ToggleControl,
} = wp.components;


const {
	RangeControl,
} = wp.components;



function additionalAdvancedControls( OriginalComponent ) {
    return function( props ) {       

        const unsupportedPosition = [];
        const unsupportedZindex = [];
        const unsupportedOverflow = [];

        let {
            attributes,
            setAttributes
        } = props

        return (
            <>

                <OriginalComponent { ...props } />
                <InspectorAdvancedControls>
                    <PanelBody title="Additional Advanced Settings" initialOpen={ false } className="wsu-block-control-additional-advanced">
                        { ! unsupportedPosition.includes( props.name ) && <ToggleControl
                            label="Position Element"
                            checked={ hasBlockClassName( attributes, 'wsu-position--relative') }
                            onChange={ ( position ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-position--relative', position ) } }
                            help='Sets element position to relative.'
                            />
                        }
                        { ! unsupportedZindex.includes( props.name ) && <RangeControl
                            label="Element z-index"
                            value={ parseInt( getBlockClassNameValue( attributes, 'wsu-zindex--level-' ) ) }
                            onChange={ ( zindex ) => setBlockClassName( attributes, setAttributes, 'wsu-zindex--level-', zindex ) }
                            help="Position element must be on if the element isn't already positioned in CSS."
                            min={0}
                            max={7}
                            />
                        }
                        { ! unsupportedOverflow.includes( props.name ) && <ToggleControl
                            label="Overflow Hidden"
                            checked={ hasBlockClassName( attributes, 'wsu-overflow--hidden') }
                            onChange={ ( overflow ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-overflow--hidden', overflow ) } }
                            />
                        }
                    </PanelBody>
                </InspectorAdvancedControls>
            </>
        );
    }
}


wp.hooks.addFilter(
    'editor.BlockEdit',
    'wsuwp-plugin-gutenberg/additional-advanced-controls',
    additionalAdvancedControls
);
