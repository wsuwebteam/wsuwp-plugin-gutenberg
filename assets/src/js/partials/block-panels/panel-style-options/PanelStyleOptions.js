import { 
    Panel, 
    PanelBody, 
    PanelRow,
    BaseControl,
    Button, 
    ButtonGroup,
} from '@wordpress/components';

import {
    addBlockClassName, 
    hasBlockClassName,
    getBlockClassName,
    getBlockClassNameValue,
    removeBlockClassName 
} from '../../block-utilities/blockUtilities';

const PanelStyleOptions= ( props ) => {

    let {
        isOpen=false,
        styles=[],
        prefix,
        attributes,
        setAttributes,
    } = props

    let blockClassNames = attributes.className ?? '';
    let currentValue = getBlockClassNameValue( blockClassNames, prefix );


    const setClassNames = ( value ) => {

            let updatedClasses = addBlockClassName( blockClassNames, prefix, value );
    
            setAttributes( {className: updatedClasses } );
    
    }


    const styleItem = ( styleObj ) => {

        return (
            <Button 
                variant="primary"
                isPressed={ ( currentValue == styleObj.value ) }
                onClick={ () => setClassNames( styleObj.value ) }
                >
                {styleObj.icon}
                <span>{styleObj.label}</span>
            </Button>
        )

    }


    return (
            <PanelBody title="Style Options" initialOpen={isOpen} >
                <BaseControl id="wsu-block-style" className="wsu-block-style">
                    <ButtonGroup>
                        { styles.map( ( styleObj ) => styleItem( styleObj ) ) }
                    </ButtonGroup>
                </BaseControl>
                {props.children}
            </PanelBody>

    )

}

export default PanelStyleOptions;