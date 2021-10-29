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
    } = props;

    const getSelectedColor = () => {

        
        let classNames = attributes.className ?? '';

        let selectedColor = getBlockClassName( classNames, prefix );

        let selectedValue = value;

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

        let selectedColor = '';

        colors.forEach(
            ( colorObj, index ) => { 

                if ( color === colorObj.color ) {

                    selectedColor = colorObj.name;

                }

            }
        )

        return selectedColor;

    }

    const addColor = ( color ) => {

        let selectedColor = getColorName( color );
        let classNames = attributes.className ?? '';
        let updatedClasses = addBlockClassName( classNames, prefix, selectedColor );

        setAttributes( {className: updatedClasses } );

    }

    let pickerId = 'color-picker-' + Math.floor( Math.random() * 1000000 );

    return (
        <BaseControl id={pickerId} label={label}>
            <ColorPalette
                colors={ colors }
                value={ getSelectedColor() }
                onChange={ ( color ) => addColor( color ) }
                clearable={false}
                disableCustomColors={true}
            />
        </BaseControl>
    )
    
} 

export default ColorClassControl;