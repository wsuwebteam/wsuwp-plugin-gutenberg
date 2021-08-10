import { SearchControl, TextControl } from '@wordpress/components';

const PerRow = ( { attributes, onChange } ) => {

    return (
        <TextControl
            label="Cards Per Row"
            value={ attributes.perRow ? attributes.perRow : '' }
            onChange= { (value) => onChange( value ) }
        />
    )

}

export default PerRow;