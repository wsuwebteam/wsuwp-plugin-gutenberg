import { SelectControl } from '@wordpress/components';

const PostTypeSelectControl = ( props  ) => {

    console.log( props );

    let { attributes, setAttributes } = props;

    return (
        <SelectControl
            label="Post Type"
            value={ attributes.postType ? attributes.postType : 'post' }
            options={ [
                { label: 'Post', value: 'post' },
                { label: 'Page', value: 'page' },
                { label: 'Any', value: 'any' },
            ] }
            onChange={ ( postType ) => setAttributes( {postType} ) }
        />
    )
    
} 

export default PostTypeSelectControl;