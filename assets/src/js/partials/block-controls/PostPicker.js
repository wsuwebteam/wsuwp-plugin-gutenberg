import { SearchControl, TextControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const PostPicker = ( props ) => {
    const { attributes, onChange } = props;

    console.log(props);

    //const [ posts, setPosts ] = useState( [] );

    //console.log( posts )

    return (
        <TextControl
            label="Post IDs"
            value={ attributes.insert_posts ? attributes.insert_posts : '' }
            onChange= { (value) => onChange( value ) }
        />
    )

}

export default PostPicker;