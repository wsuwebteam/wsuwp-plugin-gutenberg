import { TextControl } from '@wordpress/components';

const AnchorControl = ( props ) => {

    let { attributes, setAttributes } = props;

    return (
        <>
            <TextControl
                label="HTML anchor"
                value={ attributes.id ?? '' }
                onChange={ ( id ) => setAttributes( {id} ) }
                help='Enter a word or two — without spaces — to make a unique web address just for this block, called an “anchor.” Then, you’ll be able to link directly to this section of your page.'
            />
        </>
    )
    
} 

export default AnchorControl;