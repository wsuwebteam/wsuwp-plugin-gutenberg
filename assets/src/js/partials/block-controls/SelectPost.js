import { SearchControl, TextControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const SelectPost = ( { } ) => {

    //const [ posts, setPosts ] = useState( [] );

    //console.log( posts )

    return (
        <TextControl
            label="Search Posts/Pages"
            value='test'
        />
    )

}

export default SelectPost;