import { InspectorAdvancedControls } from '@wordpress/block-editor';

import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import {
    hasBlockClassName,
    setBlockClassNameBool,
    getBlockClassNameValue,
    setBlockClassName,
} from "../../block-utilities/blockUtilities";

import {
    AnchorControl,
} from '../../block-controls/blockControls';

const {
	ToggleControl,
    SelectControl,
    RangeControl,
} = wp.components;


function additionalAdvancedControls( OriginalComponent ) {
    return function( props ) {       

        const unsupportedPosition = [];
        const unsupportedZindex = [];
        const unsupportedOverflow = [];
        const unsupportedHide = [];

        const supportsAnimation = [
            'wsuwp/card',
            'core/image',
            'core/heading',
            'wsuwp/banner', 
            'wsuwp/button', 
            'wsuwp/callout', 
            'wsuwp/column', 
            'wsuwp/container', 
            'wsuwp/decorator', 
            'wsuwp/row', 
            'wsuwp/section',
            'core/paragraph',
            'wsuwp/stat',
        ];


        const supportsAnchor = [
            'wsuwp/card',
            'wsuwp/card-group',
            'wsuwp/banner', 
            'wsuwp/button', 
            'wsuwp/callout', 
            'wsuwp/column', 
            'wsuwp/container', 
            'wsuwp/row', 
            'wsuwp/section',
            'wsuwp/stat',
        ];

        const excludeAdvanced = [
            'wsuwp/card',
        ]

        let {
            attributes,
            setAttributes
        } = props

        return (
            <>
                <OriginalComponent { ...props } />
                { ! excludeAdvanced.includes( props.name ) && <>
                <InspectorAdvancedControls>
                    { supportsAnchor.includes( props.name ) && <AnchorControl  { ...props } ></AnchorControl> }
                    <PanelBody title="Additional Advanced Settings" initialOpen={ false } className="wsu-block-control-additional-advanced">
                        <ToggleControl
                            label="Enable block scheduling"
                            checked={ props.attributes.blockSchedulingEnabled }
                            onChange={ ( val ) => { setAttributes({blockSchedulingEnabled: val})  } }
                            help='Inserts an additional editing panel above to schedule the display of blocks.'
                        />
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
                        { ! unsupportedOverflow.includes( props.name ) && <SelectControl
                            label='Hide at Breakpoint'
                            value={ getBlockClassNameValue( attributes, 'wsu-hide--' ) }
                            options={ [
                                { label:'none', value:''},
                                { label:'xxultrawide', value:'xxultrawide'},
                                { label:'xultrawide', value:'xultrawide'},
                                { label:'ultrawide', value:'ultrawide'},
                                { label:'desktop', value:'desktop'},
                                { label:'tablet-large', value:'tablet-large'},
                                { label:'tablet-medium', value:'tablet-medium'},
                                { label:'tablet', value:'tablet'},
                                { label:'phone', value:'phone'},
                                { label:'phone-small', value:'phone-small'},
                                ]
                            }
                            onChange={ ( animationStyle ) => setBlockClassName( attributes, setAttributes, 'wsu-hide--', animationStyle ) }
                            />
                        }
                        { supportsAnimation.includes( props.name ) && <ToggleControl
                            label="Animate"
                            checked={ hasBlockClassName( attributes, 'wsu-animate') }
                            onChange={ ( overflow ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-animate', overflow ) } }
                            />
                        }
                    </PanelBody>
                </InspectorAdvancedControls>
                </>}
            </>
        );
    }
}


wp.hooks.addFilter(
    'editor.BlockEdit',
    'wsuwp-plugin-gutenberg/additional-advanced-controls',
    additionalAdvancedControls
);
