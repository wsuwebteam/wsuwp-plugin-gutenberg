const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl,
	ColorPalette,
} = wp.components;

import { 
    addBlockClassName, 
    hasBlockClassName,
    getBlockClassName,
    removeBlockClassName 
} from '../block-utilities/blockUtilities';

const ColorClassControl = ( props ) => {

    let { 
        attributes, 
        setAttributes, 
        colors,
        label='Color',
        prefix='wsu-color-background--',
        value='#ffffff',
        onSetColor=false,
    } = props;

    const getSelectedColor = () => {

        let selectedValue = '';

        let classNames = attributes.className ?? '';

        let selectedColor = ( onSetColor ) ? value : getBlockClassName( classNames, prefix );

        if ( '' !== selectedColor ) {

            colors.forEach(
                ( colorObj, index ) => { 

                    if ( selectedColor === colorObj.name ) {

                        selectedValue = colorObj.color;

                    }

                }
            )

        }

        return selectedValue

    }


    const getColorName = ( color ) => {

        let colorName = '';

        colors.forEach(
            ( colorObj, index ) => { 

                if ( color === colorObj.color ) {

                    colorName = colorObj.name;

                }

            }
        )

        return colorName;

    }

    const addColor = ( color ) => {

        let selectedColor = getColorName( color );
        let classNames = attributes.className ?? '';
        let updatedClasses = addBlockClassName( classNames, prefix, selectedColor );

        setAttributes( {className: updatedClasses } );

    }

    const returnColorName = ( color ) => {
        let colorName = getColorName( color );
        onSetColor( colorName )
    }

    let pickerId = 'color-picker-' + Math.floor( Math.random() * 1000000 );

    return (
        <BaseControl id={pickerId} label={label}>
            <ColorPalette
                colors={ colors }
                value={ getSelectedColor() }
                onChange={ ( color ) => { ( onSetColor ) ? returnColorName( color ) : addColor( color ) } }
                clearable={false}
                disableCustomColors={true}
            />
        </BaseControl>
    )
    
} 

export default ColorClassControl;