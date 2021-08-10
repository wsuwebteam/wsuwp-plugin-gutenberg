import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { FeedPostsControl } from '../block-controls/blockControls';

const PanelFeedPosts = ( props ) => {


    return (
            <PanelBody title="Feed Posts" initialOpen={false} >
                <FeedPostsControl { ...props } />
                {props.children}
            </PanelBody>

    )

}

export default PanelFeedPosts;