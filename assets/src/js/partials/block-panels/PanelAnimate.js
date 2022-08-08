import { Panel, PanelBody, PanelRow } from '@wordpress/components';

import { 
    SelectControl,
    RangeControl 
} from '@wordpress/components';

import {
    addBlockClassName, 
    hasBlockClassName,
    getBlockClassName,
    getBlockClassNameValue,
    removeBlockClassName,
    setBlockClassName
} from '../block-utilities/blockUtilities';

const animateStyles = [
    { label: 'None', value: ''},
    { label: 'Fade', value: 'fade'},
    { label: 'In From Left', value: 'fade-left'},
    { label: 'In From Right', value: 'fade-right'},
    { label: 'In From Bottom', value: 'fade-bottom'},
    { label: 'In From Botom left', value: 'fade-bottom-right'},
    { label: 'In From Botom Right', value: 'fade-bottom-right'},
];

const animateTiming = [
    { label: '5% in view', value: 'early'},
    { label: '15% in view', value: ''},
    { label: '25% in view', value: 'late'},
];

const PanelAnimate = ( props ) => {

    let {
        isOpen=false,
        attributes,
        setAttributes,
    } = props

    let isAnimatable = hasBlockClassName( attributes, 'wsu-animate' );

    return (
        <>
        { isAnimatable && <PanelBody title="Animate Options" initialOpen={isOpen} >
                <SelectControl
                    label='Animation Type'
                    value={ getBlockClassNameValue( attributes, 'wsu-animate--action-' ) }
                    options={ animateStyles }
                    onChange={ ( animationStyle ) => setBlockClassName( attributes, setAttributes, 'wsu-animate--action-', animationStyle ) }
                    />
                <SelectControl
                    label='Trigger Animation at:'
                    value={ getBlockClassNameValue( attributes, 'wsu-animate--timing-' ) }
                    options={ animateTiming }
                    onChange={ ( animateAt ) => setBlockClassName( attributes, setAttributes, 'wsu-animate--timing-', animateAt ) }
                    />
                <RangeControl
                    label="Animation Delay"
                    value={ parseInt( getBlockClassNameValue( attributes, 'wsu-animate--delay-', 0 ) ) }
                    onChange={ ( delay ) => setBlockClassName( attributes, setAttributes, 'wsu-animate--delay-', delay ) }
                    help="Increments of 200ms"
                    min={0}
                    max={6}
                    />
                {props.children}
            </PanelBody>
        }
        </>
    )

}

export default PanelAnimate;