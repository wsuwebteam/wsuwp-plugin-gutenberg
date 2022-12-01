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
        setKey = 'className',
    } = props

    let classString = attributes[setKey] ?? '';
    let currentValue = getBlockClassNameValue( classString, prefix );


    const setStyleClassNames = ( value ) => {

            let updatedClasses = addBlockClassName( classString, prefix, value );
    
            setAttributes( { [setKey]: updatedClasses } );
    
    }


    const styleItem = ( styleObj ) => {

        return (
            <Button 
                isPressed={ ( currentValue == styleObj.value ) }
                onClick={ () => setStyleClassNames( styleObj.value ) }
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