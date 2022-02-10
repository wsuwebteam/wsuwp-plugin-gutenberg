import { TextControl } from '@wordpress/components';

const FeedTermControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Term IDs"
            value={ attributes.terms }
            onChange={ ( terms ) => setAttributes( { terms } ) }
            help='Comma delimited list of term IDs (i.e. 5,6,7,8)'
        />
    )
    
} 

export default FeedTermControl;