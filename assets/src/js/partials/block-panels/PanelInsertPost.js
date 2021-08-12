import { Panel, PanelBody, PanelRow } from '@wordpress/components';
import { PostPicker } from '../block-controls/blockControls';

const PanelInsertPost = ( props ) => {


    return (
            <PanelBody title="Select Post/Page"  initialOpen={false} >
                <PostPicker { ...props } />
            </PanelBody>

    )

}

export default PanelInsertPost;