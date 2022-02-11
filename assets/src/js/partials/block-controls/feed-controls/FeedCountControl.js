import { TextControl } from '@wordpress/components';

const FeedCountControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Count"
            value={ attributes.count }
            onChange={ ( count ) => setAttributes( { count } ) }
            help='Number of results to return'
        />
    )
    
} 

export default FeedCountControl;