
import { ToggleControl } from '@wordpress/components';
import { FeedTaxonomyControl } from '../blockControls';

const RelatedFeedControl = ( props ) => {

    let {
        attributes,
        setAttributes,
    } = props;

    return (
        <>
            <ToggleControl
                label="Use Related Content Feed"
                checked={ attributes.doRelated }
                onChange={ ( doRelated ) => { setAttributes( { doRelated } ) } }
                help='Use parent post taxonomy to feed content.'
                />
            { attributes.doRelated && <FeedTaxonomyControl
                label="Taxonomy"
                help="Select taxonomy to filter posts by"
                host={attributes.host || window.wsu.ROOT_URL}
                postType={attributes.postType}
                value={attributes.taxonomy}
                onChange={(taxonomy) => setAttributes({ taxonomy })}
                />
            }
        </>
    )
}

export default RelatedFeedControl;