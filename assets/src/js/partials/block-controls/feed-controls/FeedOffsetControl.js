import { TextControl } from '@wordpress/components';

const FeedOffsetControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Offset"
            value={ attributes.offset }
            onChange={ ( offset ) => setAttributes( { offset } ) }
            help='Offset skips a given number of items before starting results.'
        />
    )
    
} 

export default FeedOffsetControl;