

const {
	PanelBody,
	TextControl,
	SelectControl,
	Button,
	FocalPointPicker,
	BaseControl,
    IconButton,
    ToggleControl
} = wp.components;



const DisplayFieldControl = ( props ) => {

    let {
        attributes,
        setAttributes,
        fieldOptions = []
    } = props

    let {
        displayFields = []
    } = attributes

    const DisplayField = ( { field } ) => {

        let {
            label = '',
            value = '',
        } = field;
    
        return (
            <ToggleControl
                label={label}
                checked={ displayFields.includes( value ) }
                onChange={ ( value ) => updateDisplayFieldArray( field, value ) }
            />
        )
    
    }


    const updateDisplayFieldArray = ( field, value ) => {

        console.log( value );

        let fieldValues = displayFields.split(',');

        if ( value ) {
    
            fieldValues.push( field.value );
    
        } else {
    
            let index = fieldValues.indexOf( field.value );
    
            if ( index > -1 ) {
                fieldValues.splice( index, 1); // 2nd parameter means remove one item only
            }
    
        }
    
        console.log( fieldValues );
    
        setAttributes( { displayFields: fieldValues.join(',') } );
        
    }


    return (

        fieldOptions.map( ( field ) => <DisplayField field={ field }  />  )

    );

}

export default  DisplayFieldControl;


