import { TextControl } from '@wordpress/components';

const FeedHostControl = ( { attributes, setAttributes } ) => {

    return (
        <TextControl
            label="Host (optional)"
            value={ attributes.host }
            onChange={ ( host ) => setAttributes( { host } ) }
            help='URL for the site to get results from (i.e. https://news.wsu.edu).'
        />
    )
    
} 

export default FeedHostControl;