import { SelectControl } from '@wordpress/components';

const FeedPostTypeControl = ( { attributes, setAttributes } ) => {

    return (
        <SelectControl
            label="Post Type"
            value={ attributes.postType }
            options={ [
                { label: 'Post', value: 'post' },
                { label: 'Page', value: 'page' },
                { label: 'Any', value: 'any' },
            ] }
            onChange={ ( postType ) => setAttributes( { postType } ) }
        />
    )
    
} 

export default FeedPostTypeControl;