import { Panel, PanelBody, PanelRow } from '@wordpress/components';

const {
	ToggleControl,
    SelectControl,
    RangeControl,
} = wp.components;

import { hasBlockClassName, setBlockClassNameBool, getBlockClassNameValue } from '../block-utilities/blockClassName';

import { 
    AlignItemControl,
    MaxWidthControl,
} from '../block-controls/blockControls';

const PanelDeveloperTools = ( props ) => {

    let {
        isOpen=false,
        positionElement=false,
        alignItem=false,
        maxWidth=false,
        zindex=true,
        overflow=true,
        hide=true,
        animate=false,
        attributes,
        setAttributes
    } = props


    return (
            <PanelBody title="Developer Tools" initialOpen={isOpen} >
                { maxWidth && <MaxWidthControl {...props} /> }
                { positionElement && <ToggleControl
                    label="Position Element"
                    checked={ hasBlockClassName( attributes, 'wsu-position--relative') }
                    onChange={ ( position ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-position--relative', position ) } }
                    help='Sets element position to relative.'
                    />
                }
                { alignItem && <AlignItemControl {...props} /> }
                { zindex && <RangeControl
                    label="Element z-index"
                    value={ parseInt( getBlockClassNameValue( attributes, 'wsu-zindex--level-' ) ) }
                    onChange={ ( zindex ) => setBlockClassName( attributes, setAttributes, 'wsu-zindex--level-', zindex ) }
                    help="Position element must be on if the element isn't already positioned in CSS."
                    min={0}
                    max={7}
                    />
                }
                { overflow && <ToggleControl
                    label="Overflow Hidden"
                    checked={ hasBlockClassName( attributes, 'wsu-overflow--hidden') }
                    onChange={ ( overflow ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-overflow--hidden', overflow ) } }
                    />
                }
                { hide && <SelectControl
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
                { animate && <ToggleControl
                    label="Animate"
                    checked={ hasBlockClassName( attributes, 'wsu-animate') }
                    onChange={ ( overflow ) => { setBlockClassNameBool( attributes, setAttributes, 'wsu-animate', overflow ) } }
                    />
                }
                {props.children}
            </PanelBody>

    )

}

export default PanelDeveloperTools;